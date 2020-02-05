import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { useSelector } from 'react-redux';

const MealList = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const goToMealDetails = (id, title) => {
    const isFavorite = favoriteMeals.some(meal=> meal.id === id);
    props.navigation.navigate('MealDetails', {
      mealId: id, 
      mealTitle: title, 
      isFavorite: isFavorite
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
      data={props.data}
      keyExtractor={(item, index) => item.id}
      renderItem={renderMealItem}
      style={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
};
const styles = StyleSheet.create({
  list: {
    width: '100%'
  }
});

export default MealList;