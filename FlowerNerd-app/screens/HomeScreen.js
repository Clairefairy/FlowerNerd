import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styles from '../styles/styles';
import FlowerCard from '../components/FlowerCard';
import Header from '../components/Header';

const API_URL = 'http://192.168.0.48:3000';

export default function HomeScreen({ favorites, toggleFavorite, addRecord }) {
  const [flowers, setFlowers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFlowers = async (query = '') => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/flowers${query ? `?search=${query}` : ''}`);
      const data = await res.json();
      setFlowers(data);
    } catch (error) {
      console.error('Erro ao buscar flores:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlowers();
  }, []);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    fetchFlowers(query);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Searchbar
          placeholder="Buscar por nome científico, significado, cor, variante ou poder..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
        <FlatList
          data={flowers}
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