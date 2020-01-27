import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CategoriesScreen from './CategoriesScreen';

const CategoryMealsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

export default CategoryMealsScreen;