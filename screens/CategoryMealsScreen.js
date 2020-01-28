import React from 'react';
import { Text, View, StyleSheet, Button, Platform } from 'react-native';
import CategoriesScreen from './CategoriesScreen';
import Colors from '../constants/colors';
import { CATEGORIES } from '../data/dummy-data';


const CategoryMealsScreen = (props) => {
  const {navigation} = props;
  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(category => category.id === catId);

  return (
    <View style={styles.screen}>      
      <Text>{selectedCategory.title}</Text>
      <Text>{selectedCategory.color}</Text>
      <Text>{selectedCategory.catId}</Text>
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

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  selectedCategory = CATEGORIES.find(category => category.id == catId);

  return {
    title: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

export default CategoryMealsScreen;