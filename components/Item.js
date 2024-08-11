import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Item({ id,title, onOpenModel, onDelete }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{title}</Text>
      <View style={styles.iconContainer}>
        <Pressable onPress={onOpenModel} style={({ pressed }) => pressed ? [styles.iconButton, styles.iconButtonPressed] : styles.iconButton}>
          <MaterialIcons onPress={()=>onOpenModel(id)} name="edit" size={24} color="#4caf50" />
        </Pressable>
        <Pressable onPress={()=>onDelete(id)} style={({ pressed }) => pressed ? [styles.iconButton, styles.iconButtonPressed] : styles.iconButton}>
          <MaterialIcons name="delete" size={24} color="#f44336" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 5,
    marginLeft: 10,
  },
  iconButtonPressed: {
    opacity: 0.5,
  },
});

export default Item;
