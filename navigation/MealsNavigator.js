import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen  from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';
import Colors from '../constants/colors';

const MealsNavigator = createStackNavigator({  
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },  
  MealDetails: MealsDetailsScreen
}, 
{
  initialRouteName: 'Categories', 
  mode: 'modal',
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

export default createAppContainer(MealsNavigator);