import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import CategoriesScreen from './CategoriesScreen';

const CategoryMealsScreen = (props) => {
  const {navigation} = props;

  return (
    <View style={{...styles.screen, backgroundColor: navigation.getParam('color','#fff')}}>      
      <Text>{navigation.getParam('title', 'No Title')}</Text>
      <Text>{navigation.getParam('color', 'No Color')}</Text>
      <Text>{navigation.getParam('id', 'No id')}</Text>
      <Button title='Go to Meal Details' onPress={() => {
        props.navigation.navigate('MealDetails');
      }} />      
      <Button title='Go Home' onPress={() => {
        props.navigation.navigate('Categories');
      }} />
      <Button title='Go Back' onPress={() => {
        props.navigation.goBack();
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

export default CategoryMealsScreen;