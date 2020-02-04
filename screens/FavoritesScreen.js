import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = (props) => {
  const {navigation} = props;
    
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  
  return (
    <MealList
      data={favoriteMeals}
      navigation={navigation}
    />
  );
}

FavoritesScreen.navigationOptions = navData => { 
  return {
    title: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item iconName="ios-menu" title="Menu" onPress={()=>{
          navData.navigation.toggleDrawer();
        }} />
      </HeaderButtons>
    )
  }  
}

export default FavoritesScreen;