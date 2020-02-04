import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = (props) => {
  const goToMealDetails = (id, title) => {
    props.navigation.navigate('MealDetails', {
      mealId: id, 
      mealTitle: title
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