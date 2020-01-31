import React from 'react';

import { Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import { MEALS } from '../data/dummy-data';
import { ScrollView } from 'react-native-gesture-handler';
import COLORS from '../constants/colors';

const MealsDetailsScreen = (props) => {
  const {navigation} = props;
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  
  return (
    <ScrollView style={styles.screen}>
      <View>
        <View style={styles.imageContainer}>
          <Image 
            source={{uri: selectedMeal.imageUrl}} 
            style={styles.image} 
            resizeMode='contain'
          />
        </View>
      </View> 
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{selectedMeal.title}</Text>
      </View>

      <View style={styles.stepsContainer}> 
        <Text style={styles.subtitle}>Directions</Text>
        {          
              selectedMeal.steps.map((step, index) => {
                return (
                  <View style={styles.stepContainer}>                 
                    <Text style={{...styles.bodyText, width:25}}>{index+1}.</Text>
                    <Text style={styles.bodyText} numberOfLines={3}>{step}</Text>
                  </View>
                )  
              })
        }        
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
    height: Dimensions.get('window').height / 16,
    marginBottom: 10,
  }, 
  ingredients: {
    alignItems: 'flex-start',
    height: Dimensions.get('window').height /14,
  },
  stepsContainer: {
    alignItems: 'flex-start',
    height: Dimensions.get('window').height / 3, 
  }, 
  image: {
    width: '100%',
    height: '100%'
  },
  stepContainer: {
    flexDirection: 'row',        
    justifyContent: 'flex-start', 
    margin: 5,
  }, 
  title: {
    fontFamily: 'OpenSans-Bold', 
    fontSize: 20,
    color: COLORS.primaryColor,
  }, 
  subtitle: {
    fontFamily: 'OpenSans-Bold', 
    fontSize: 18,
    marginBottom: 10,
    color: COLORS.secondaryColor
  },
  bodyText: {
    fontFamily: 'OpenSans',
    fontSize: 16,     
  }
});

export default MealsDetailsScreen;