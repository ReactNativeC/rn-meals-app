import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

const FavoritesScreen = (props) => {
  const {navigation} = props;
    
  const favoriteMeals = useSelector(state => state.favoriteMeals);
  
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