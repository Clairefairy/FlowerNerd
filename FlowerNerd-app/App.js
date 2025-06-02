import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import RecordsScreen from './screens/RecordsScreen';

const Tab = createBottomTabNavigator();

const FAVORITES_STORAGE_KEY = '@FlowerNerd:favorites';
const RECORDS_STORAGE_KEY = '@FlowerNerd:records';

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [records, setRecords] = useState([]);

  // Carregar favoritos e registros do AsyncStorage ao iniciar o app
  useEffect(() => {
    loadFavorites();
    loadRecords();
  }, []);

  // Função para carregar os favoritos do AsyncStorage
  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
      if (storedFavorites !== null) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
    }
  };

  // Função para carregar os registros do AsyncStorage
  const loadRecords = async () => {
    try {
      const storedRecords = await AsyncStorage.getItem(RECORDS_STORAGE_KEY);
      if (storedRecords !== null) {
        setRecords(JSON.parse(storedRecords));
      }
    } catch (error) {
      console.error('Erro ao carregar registros:', error);
    }
  };

  // Função para salvar os favoritos no AsyncStorage
  const saveFavorites = async (newFavorites) => {
    try {
      await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Erro ao salvar favoritos:', error);
    }
  };

  // Função para salvar os registros no AsyncStorage
  const saveRecords = async (newRecords) => {
    try {
      await AsyncStorage.setItem(RECORDS_STORAGE_KEY, JSON.stringify(newRecords));
    } catch (error) {
      console.error('Erro ao salvar registros:', error);
    }
  };

  // Função para alternar o estado de favorito de uma flor
  const toggleFavorite = (flower) => {
    const newFavorites = favorites.some(fav => fav.id === flower.id)
      ? favorites.filter(fav => fav.id !== flower.id)
      : [...favorites, flower];
    
    setFavorites(newFavorites);
    saveFavorites(newFavorites);
  };

  // Função para adicionar um novo registro
  const addRecord = async (flower, photoUri) => {
    const newRecord = {
      flower,
      photoUri,
      timestamp: new Date().toISOString(),
    };

    const newRecords = [newRecord, ...records];
    setRecords(newRecords);
    await saveRecords(newRecords);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: '#757575',
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Flores"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="flower" size={size} color={color} />
            ),
          }}
        >
          {() => (
            <HomeScreen 
              favorites={favorites} 
              toggleFavorite={toggleFavorite}
              addRecord={addRecord}
            />
          )}
        </Tab.Screen>
        
        <Tab.Screen
          name="Favoritos"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" size={size} color={color} />
            ),
          }}
        >
          {() => (
            <FavoritesScreen 
              favorites={favorites} 
              toggleFavorite={toggleFavorite}
              addRecord={addRecord}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Registros"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="camera" size={size} color={color} />
            ),
          }}
        >
          {() => (
            <RecordsScreen 
              favorites={favorites} 
              toggleFavorite={toggleFavorite}
              records={records}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}