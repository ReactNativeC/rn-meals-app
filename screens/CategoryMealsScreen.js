import React from 'react';
import { Text, View, StyleSheet, Button, Platform } from 'react-native';
import CategoriesScreen from './CategoriesScreen';
import Colors from '../constants/colors';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
  const {navigation} = props;
  const catId = navigation.getParam('categoryId');
  
  const selectedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  const goToMealDetails = (id) => {
    navigation.navigate('MealDetails', {
      mealId: id
    })
  };

  const renderMealItem = (itemData) => {
    return (
      <MealItem 
        meal={itemData.item} 
        onMealSelect={goToMealDetails}
      />
    );
  };

  return (    
      <FlatList 
        data={selectedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}   
        style={styles.list}     
        showsVerticalScrollIndicator={false}
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

const styles = StyleSheet.create({
  list: {
    width: '100%'    
  }
});

export default CategoryMealsScreen;