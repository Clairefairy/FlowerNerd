const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://localhost:27017/FlowerNerd');

const Flower = mongoose.model('Flower', {
  id: String,
  scientificName: String,
  meanings: {
    generalSymbolicMeanings: [String],
    colorMeaning: [String],
    variantMeaning: [String]
  },
  powers: [String],
  folklore: [String]
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

app.get('/flowers', async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      query = {
        $or: [
          { scientificName: { $regex: search, $options: 'i' } },
          { 'meanings.generalSymbolicMeanings': { $regex: search, $options: 'i' } },
          { 'meanings.colorMeaning': { $regex: search, $options: 'i' } },
          { 'meanings.variantMeaning': { $regex: search, $options: 'i' } },
          { powers: { $regex: search, $options: 'i' } },
          { folklore: { $regex: search, $options: 'i' } }
        ]
      };
    }

    const flowers = await Flower.find(query).select('id scientificName meanings powers folklore');
    res.json(flowers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/plantations', upload.single('photo'), async (req, res) => {
  const { name, description, latitude, longitude } = req.body;
  const photo = req.file ? req.file.path : null;
  const plantation = new Plantation({ name, description, photo, latitude, longitude });
  await plantation.save();
  res.json(plantation);
});

app.listen(3000, () => console.log('Backend listening on port 3000'));