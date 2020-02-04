import React from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground, Platform } from 'react-native';
import { WorldAlignment } from 'expo/build/AR';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import globalStyles from '../constants/global-styles';
import DefaultText from './DefaultText';

const MealItem = (props) => {
  let TouchComponent = TouchableOpacity;
  
  if(Platform.OS === 'android' && Platform.Version >= 21)
    TouchComponent = TouchableNativeFeedback;

  return (    
    <TouchComponent onPress={() => { props.onMealSelect(props.meal.id, props.meal.title)}}>
      <View style={styles.mealItem}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground style={styles.bgImage} source={{ uri: props.meal.imageUrl }}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>{props.meal.title}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <DefaultText>{props.meal.duration}m</DefaultText>
          <DefaultText>{props.meal.complexity}</DefaultText>
          <DefaultText>{props.meal.affordability}</DefaultText>
        </View>
      </View>
    </TouchComponent> 
  );
};

const styles = StyleSheet.create({
  mealItem: {                 
    height: 200,
    margin: 10,
    backgroundColor: '#e6e6fa',                        
    borderRadius: 15,
    overflow: 'hidden'    
  }, 
  mealRow: {    
    flexDirection: 'row',    
    justifyContent: 'space-between', 
    alignItems: 'flex-end'
  },
  mealHeader: {
    height: '85%',    
  },  
  mealDetail: {
    height: '15%', 
    paddingHorizontal: 10,  
    alignItems: 'center'     
  }, 
  bgImage: {
    width: '100%',
    height: '100%',    
    justifyContent: 'flex-end'
  }, 
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: 'white'    
  }, 
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',         
    alignItems: 'center',  
    paddingHorizontal: 10,    
  }, 
});

export default MealItem;