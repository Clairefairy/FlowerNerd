import React, { useState } from 'react';
import { View } from 'react-native';
import { List, Divider, IconButton, Text } from 'react-native-paper';
import styles from '../styles/styles';

const CollapsibleSection = ({ title, items, icon, isFolklore = false }) => {
  const [expanded, setExpanded] = useState(false);

  if (!items || items.length === 0) return null;

  return (
    <>
      <List.Section>
        <List.Subheader style={styles.sectionHeader}>
          {title}
          <IconButton
            icon={expanded ? 'chevron-up' : 'chevron-down'}
            size={20}
            onPress={() => setExpanded(!expanded)}
          />
        </List.Subheader>
        {expanded && items.map((item, index) => (
          isFolklore ? (
            <View key={index} style={styles.folkloreItem}>
              <List.Icon icon={icon} />
              <Text style={styles.folkloreText}>{item}</Text>
            </View>
          ) : (
            <View key={index} style={styles.listItem}>
              <List.Icon icon={icon} />
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          )
        ))}
      </List.Section>
      <Divider style={styles.divider} />
    </>
  );
};

export default CollapsibleSection; 