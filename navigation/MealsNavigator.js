import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator, tabBarIcon } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform, Text, Dimensions } from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';
import Colors from '../constants/colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitleStyle: {
    fontFamily: 'OpenSans-Bold',  
  }, 
  headerBackTitleStyle: {
    fontFamily: 'OpenSans',
    fontSize: 14,
  }
}

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetails: MealsDetailsScreen
},
  {
    defaultNavigationOptions: defaultNavOptions,
  });

const FavoritesNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetails: MealsDetailsScreen,
},
  {
    defaultNavigationOptions: defaultNavOptions,
  });

const routeConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabBarInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabBarInfo.tintColor} />
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS == 'android'? <Text style={{fontFamily: 'OpenSans-Bold'}}>Meals</Text>: 'Meals',
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabBarInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabBarInfo.tintColor} />
      },
      tabBarColor: Colors.secondaryColor,
      tabBarLabel: Platform.OS == 'android'? <Text style={{fontFamily: 'OpenSans-Bold'}}>Favorites</Text>: 'Favorites',
    }
  }
}

const MealsFavoritesTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(routeConfig, {
    activeColor: 'white',
    shifting: true,    
  }) :
  createBottomTabNavigator(
    routeConfig,
    {
      tabBarOptions: {
        activeTintColor: Colors.secondaryColor,        
        labelStyle: {
          fontFamily: 'OpenSans-Bold',
          fontSize: 14,
        },
      },
    }
  );

const FiltersStackNavigator = createStackNavigator({
  Filters: FiltersScreen  
}, 
{  
  defaultNavigationOptions: defaultNavOptions
});

const MainNavigator = createDrawerNavigator({
  MealsFavorites: {
    screen: MealsFavoritesTabNavigator,
    navigationOptions: {
      drawerLabel : 'Meals'
      
    },
  }, 
  Filters: FiltersStackNavigator,
}, 
{
  drawerBackgroundColor: 'floralwhite',
  contentOptions: {
    activeTintColor: Colors.secondaryColor,     
    labelStyle: {
      fontFamily: 'OpenSans-Bold',
    }
  }, 
  
});

export default createAppContainer(MainNavigator);