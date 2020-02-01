import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen  from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';
import Colors from '../constants/colors';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator({  
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },  
  MealDetails: MealsDetailsScreen
}, 
{
  initialRouteName: 'Categories',   
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitleStyle: {
      fontSize: 24,
      fontFamily: 'OpenSans-Bold'
    }
  }
});

const MealsFavoritesTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator, 
  Favorites: FavoritesScreen
});

export default createAppContainer(MealsFavoritesTabNavigator);