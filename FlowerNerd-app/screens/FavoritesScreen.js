import React from 'react';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styles from '../styles/styles';
import FlowerCard from '../components/FlowerCard';
import Header from '../components/Header';

export default function FavoritesScreen({ favorites, toggleFavorite, addRecord }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredFavorites = favorites.filter(flower => 
    flower.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    flower.meanings.generalSymbolicMeanings.some(meaning => 
      meaning.toLowerCase().includes(searchQuery.toLowerCase())
    ) ||
    flower.powers.some(power => 
      power.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Searchbar
          placeholder="Buscar nos favoritos..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
        <FlatList
          data={filteredFavorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FlowerCard
              flower={item}
              isFavorite={favorites.some(fav => fav.id === item.id)}
              onToggleFavorite={() => toggleFavorite(item)}
              addRecord={addRecord}
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
} 