import React from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { WorldAlignment } from 'expo/build/AR';
import { TouchableOpacity } from 'react-native-gesture-handler';
import globalStyles from '../constants/global-styles';

const MealItem = (props) => {
  return (
    <TouchableOpacity onPress={() => { props.onMealSelect(props.meal.id)}}>
      <View style={styles.mealItem}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground style={styles.bgImage} source={{ uri: props.meal.imageUrl }}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>{props.meal.title}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <Text style={globalStyles.bodyText}>{props.meal.duration}m</Text>
          <Text style={globalStyles.bodyText}>{props.meal.complexity}</Text>
          <Text style={globalStyles.bodyText}>{props.meal.affordability}</Text>
        </View>
      </View>
    </TouchableOpacity> 
  );
};

const styles = StyleSheet.create({
  mealItem: {                 
    height: 200,
    margin: 10,
    backgroundColor: '#e6e6fa',                        
    borderRadius: 20,
    overflow: 'hidden'    
  }, 
  mealRow: {    
    flexDirection: 'row',    
    justifyContent: 'space-between', 
    alignItems: 'flex-end'
  },
  mealHeader: {
    height: '90%',    
  },  
  mealDetail: {
    height: '10%', 
    paddingHorizontal: 10,       
  }, 
  bgImage: {
    width: '100%',
    height: '100%',    
    justifyContent: 'flex-end'
  }, 
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    color: 'white'    
  }, 
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',         
    alignItems: 'center',  
    paddingHorizontal: 10,    
  }, 
});

export default MealItem;