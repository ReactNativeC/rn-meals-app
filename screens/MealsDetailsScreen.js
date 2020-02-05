import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, StyleSheet, Image, Dimensions, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/colors';
import MealSection from '../components/MealSection';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/meals';

const MealsDetailsScreen = (props) => {
  const {navigation} = props;
  const mealId = navigation.getParam('mealId');
  const allMeals = useSelector(state => state.meals.meals);
  const selectedMeal = allMeals.find(meal => meal.id === mealId);
  const isFavorite = useSelector(state=> state.meals.favoriteMeals.some(meal=> meal.id === mealId));

  //this is not the optimal solution becuase the title only gets set after the component render cycle is completed.
  // useEffect(() => {
  //   navigation.setParams({mealTitle: selectedMeal.title});
  // }, [selectedMeal])
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  },[dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({saveFavoriteMeal: toggleFavoriteHandler });   
    navigation.setParams({isFavorite: isFavorite});      
  }, [toggleFavoriteHandler, isFavorite])
  
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
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
  const mealId = navigation.getParam('mealId');
  const mealTitle = navigation.getParam('mealTitle');
  const toggleFavorite = navigation.getParam('saveFavoriteMeal');
  const isFavorite = navigation.getParam('isFavorite');
    
  let adjustedTitle = mealTitle;
  if(mealTitle !== undefined && mealTitle.length > 27)
    adjustedTitle = mealTitle.substring(0,27) + "..."

  return {
    headerTitle: adjustedTitle,
    headerRight: () => {      
        return (
          <HeaderButtons HeaderButtonComponent={HeaderButton}> 
            <Item title='star' iconName={isFavorite? 'ios-star': 'ios-star-outline'} onPress={toggleFavorite}/>        
          </HeaderButtons>
        )    
    }
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
    color: Colors.primaryColor,
  }, 
  mealSection: {
    marginBottom: 10,
  }
});

export default MealsDetailsScreen;