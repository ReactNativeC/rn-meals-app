import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import CategoriesScreen from './CategoriesScreen';

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen!</Text>
      <Button title='Go to Meal Details' onPress={() => {
        props.navigation.navigate({routeName: 'MealDetails'});
      }} />
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