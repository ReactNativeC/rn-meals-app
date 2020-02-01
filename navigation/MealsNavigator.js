import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, tabBarIcon } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import CategoriesScreen  from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';
import Colors from '../constants/colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

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
  }, 
  
});

const screenConfig = {
  Home: { 
    screen: MealsNavigator,   
    navigationOptions: {
      tabBarIcon: (tabBarInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabBarInfo.tintColor} />
      }
    }          
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabBarInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabBarInfo.tintColor} />
      }
    }
  }
}

const MealsFavoritesTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(screenConfig) :
  createBottomTabNavigator(
    screenConfig,
    {
      tabBarOptions: {
        activeTintColor: Colors.secondaryColor,
        labelStyle: {
          fontFamily: 'OpenSans',
        },
      },
    }
  );

export default createAppContainer(MealsFavoritesTabNavigator);