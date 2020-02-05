import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Image, Dimensions, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/colors';
import MealSection from '../components/MealSection';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/meals';
import DefaultText from '../components/DefaultText';

const MealsDetailsScreen = (props) => {
  const {navigation} = props;
  const mealId = navigation.getParam('mealId');
  const allMeals = useSelector(state => state.meals.meals);
  const selectedMeal = allMeals.find(meal => meal.id === mealId);
  const isFavorite = useSelector(state=> state.meals.favoriteMeals.some(meal=> meal.id === mealId));

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
      {(selectedMeal.isVegetarian || selectedMeal.isGlutenFree || selectedMeal.isLactoseFree ||selectedMeal.isVegan) && (
      <View style={styles.mealAdditionalInfo}>      
        {selectedMeal.isVegetarian && (<View style={styles.mealInfoContainer}><DefaultText style={styles.mealInfo}>Vegetarian</DefaultText></View>)}
        {selectedMeal.isGlutenFree && (<View style={styles.mealInfoContainer}><DefaultText style={styles.mealInfo}>Gluten Free</DefaultText></View>)}        
        {selectedMeal.isLactoseFree && (<View style={styles.mealInfoContainer}><DefaultText style={styles.mealInfo}>Lactose Free</DefaultText></View>)}                
        {selectedMeal.isVegan && (<View style={styles.mealInfoContainer}><DefaultText style={styles.mealInfo}>Vegan</DefaultText></View>)}         
      </View>
      )}
      <View style={styles.titleContainer}>
        <DefaultText style={styles.title}>{selectedMeal.title}</DefaultText>
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
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',   
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
    marginBottom: 20,
  }, 
  mealSection: {
    marginBottom: 10,
  },
  mealAdditionalInfo: {
    flexDirection: 'row',
    width:'100%', 
    justifyContent: 'center',
    flexWrap: "wrap",    
    marginBottom: 15,    
    marginTop: 5,
  }, 
  mealInfoContainer: {   
    padding: 7,    
    marginRight: 10,   
    marginBottom: 10, 
    backgroundColor: '#c71585', 
    borderRadius: 10,
    
  }, 
  mealInfo: {
    fontFamily: 'OpenSans-Bold', 
    color: 'white',
  }
});

export default MealsDetailsScreen;