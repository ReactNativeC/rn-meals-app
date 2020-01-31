import React from 'react';

import { Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import { MEALS } from '../data/dummy-data';
import { ScrollView } from 'react-native-gesture-handler';
import COLORS from '../constants/colors';
import MealSection from '../components/MealSection';

const MealsDetailsScreen = (props) => {
  const {navigation} = props;
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: selectedMeal.imageUrl }}
          style={styles.image}
          resizeMode='contain'
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{selectedMeal.title}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <MealSection style={styles.mealSection} headerCaption='Ingredients' data={selectedMeal.ingredients} />
        <MealSection style={styles.mealSection} headerCaption='Recipe' data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
};

MealsDetailsScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'Meal Details',
  }
}

const styles = StyleSheet.create({
  screen: {
    margin: 10,    
  },
  imageContainer: {
    alignItems: 'center',
    height: Dimensions.get('window').height / 3,
    marginBottom: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  }, 
  ingredients: {
    alignItems: 'flex-start',  
  },
  detailsContainer: {
    alignItems: 'flex-start',        
  }, 
  image: {
    width: '100%',
    height: '100%',     
  },
  title: {
    fontFamily: 'OpenSans-Bold', 
    fontSize: 20,
    color: COLORS.primaryColor,
  }, 
  mealSection: {
    marginBottom: 10,
  }
});

export default MealsDetailsScreen;