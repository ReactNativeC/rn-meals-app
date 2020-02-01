import React from 'react';
import { Text, View, StyleSheet, Button, Platform } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const {navigation} = props;
  const catId = navigation.getParam('categoryId');
  
  const selectedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return (    
     <MealList 
      data={selectedMeals}
      navigation={navigation} 
     />
  );
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  selectedCategory = CATEGORIES.find(category => category.id == catId);
  return {
    title: selectedCategory.title,
  }
}

export default CategoryMealsScreen;