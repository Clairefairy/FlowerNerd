import React, { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { Card, Title, Text, IconButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/styles';
import CollapsibleSection from './CollapsibleSection';

const FlowerCard = ({ flower, isFavorite, onToggleFavorite, photo: initialPhoto, timestamp, addRecord }) => {
  const [photo, setPhoto] = useState(initialPhoto);

  const handleTakePhoto = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'Precisamos da sua permissão para acessar a câmera.');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 0.7,
        aspect: [4, 3],
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const photoUri = result.assets[0].uri;
        setPhoto(photoUri);
        await addRecord(flower, photoUri);
        Alert.alert('Sucesso', 'Registro fotográfico salvo com sucesso!');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível capturar a foto.');
    }
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.cardHeader}>
          <Title style={styles.title}>{flower.scientificName}</Title>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>No. {flower.id}</Text>
          </View>
        </View>

        {photo && (
          <View>
            <Image 
              source={{ uri: photo }} 
              style={styles.flowerPhoto}
              resizeMode="cover"
            />
            {timestamp && (
              <Text style={styles.timestamp}>
                Registrado em: {new Date(timestamp).toLocaleDateString('pt-BR')}
              </Text>
            )}
          </View>
        )}
        
        <CollapsibleSection
          title="Significados Gerais"
          items={flower.meanings.generalSymbolicMeanings}
          icon="flower"
        />

        <CollapsibleSection
          title="Significados por Cor"
          items={flower.meanings.colorMeaning}
          icon="palette"
        />

        <CollapsibleSection
          title="Significados por Variante"
          items={flower.meanings.variantMeaning}
          icon="flower-tulip"
        />

        <CollapsibleSection
          title="Poderes"
          items={flower.powers}
          icon="magic-staff"
        />

        <CollapsibleSection
          title="Folclore"
          items={flower.folklore}
          icon="book-open-variant"
          isFolklore={true}
        />

        <View style={styles.cardButtons}>
          <IconButton
            icon="camera"
            size={24}
            iconColor="#4CAF50"
            style={styles.cameraButton}
            onPress={handleTakePhoto}
          />
          <IconButton
            icon={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            iconColor={isFavorite ? '#e91e63' : '#757575'}
            style={styles.favoriteButton}
            onPress={onToggleFavorite}
          />
        </View>
      </Card.Content>
    </Card>
  );
};

export default FlowerCard; 