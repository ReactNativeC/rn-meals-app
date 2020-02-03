import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
const FavoritesScreen = (props) => {
  const {navigation} = props;
    
  const favoriteMeals = MEALS.filter(
    meal => meal.id === "m5" || meal.id === "m3" || meal.id === "m7"
  );
  return (
    <MealList
      data={favoriteMeals}
      navigation={navigation}
    />
  );
}

FavoritesScreen.navigationOptions = {
  title: 'Your Favorites'
}

export default FavoritesScreen;