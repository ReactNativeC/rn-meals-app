import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/colors';

const CategoryMealsScreen = (props) => {
  const {navigation} = props;
  const catId = navigation.getParam('categoryId');
  
  const availaleMeals = useSelector(state => state.meals.filteredMeals);
  
  const selectedMeals = availaleMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  
  if(selectedMeals.length === 0)
    return (
      <View style={styles.container}>
        <DefaultText style={styles.errorMessage}>No meals found. Check your filters!</DefaultText>
      </View>
    )
  
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

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    justifyContent: 'center',
    alignItems: 'center'    
  },  
  errorMessage: {
    color: Colors.primaryColor,   
    fontSize: 20
  }
})

export default CategoryMealsScreen;