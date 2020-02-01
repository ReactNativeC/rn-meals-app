import React from 'react';
import MealItem from '../components/MealItem';

const MealList = (props) => {
  const goToMealDetails = (id) => {
    props.navigation.navigate('MealDetails', {
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