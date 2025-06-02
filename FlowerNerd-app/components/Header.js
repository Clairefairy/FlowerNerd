import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from '../styles/styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Flower Nerd</Text>
    </View>
  );
};

export default Header; 