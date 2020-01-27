import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen  from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';

const MealsNavigator = createStackNavigator({  
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  Categories: CategoriesScreen,
  MealDetails: MealsDetailsScreen
});

export default createAppContainer(MealsNavigator);