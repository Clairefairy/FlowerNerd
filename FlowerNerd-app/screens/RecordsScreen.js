import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Header from '../components/Header';
import FlowerCard from '../components/FlowerCard';
import styles from '../styles/styles';

const RecordsScreen = ({ favorites, toggleFavorite, records }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar registros baseado na busca
  const filteredRecords = records.filter(record => {
    const searchLower = searchQuery.toLowerCase();
    return (
      record.flower.scientificName.toLowerCase().includes(searchLower) ||
      record.flower.meanings.generalSymbolicMeanings.some(meaning => 
        meaning.toLowerCase().includes(searchLower)
      ) ||
      record.flower.powers.some(power => 
        power.toLowerCase().includes(searchLower)
      )
    );
  });

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Searchbar
          placeholder="Buscar nos registros..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
        {filteredRecords.length > 0 ? (
          <FlatList
            data={filteredRecords}
            keyExtractor={(item) => `${item.flower.id}-${item.timestamp}`}
            renderItem={({ item }) => (
              <FlowerCard
                flower={item.flower}
                photo={item.photoUri}
                isFavorite={favorites.some(fav => fav.id === item.flower.id)}
                onToggleFavorite={() => toggleFavorite(item.flower)}
                timestamp={item.timestamp}
              />
            )}
            contentContainerStyle={styles.listContainer}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Nenhum registro fotográfico encontrado.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default RecordsScreen; 