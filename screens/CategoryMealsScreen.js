import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const {navigation} = props;
  const catId = navigation.getParam('categoryId');
  
  const availaleMeals = useSelector(state => state.meals.filteredMeals);
  
  const selectedMeals = availaleMeals.filter(
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