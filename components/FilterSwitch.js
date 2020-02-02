import React from 'react';
import { View, Switch, StyleSheet, Platform } from 'react-native';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/colors';

const FilterSwitch = props => (
  <View style={styles.switchContainer}>
    <DefaultText>{props.label}</DefaultText>
    <Switch 
      trackColor={{true:Colors.primaryColor}}
      thumbColor={Platform.OS === 'android'? Colors.primaryColor : ''}
      value={props.state} 
      onValueChange={props.onChange} />
  </View>  
);

const styles = StyleSheet.create({
  switchContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width: '75%', 
    marginBottom: 20  
  }
});

export default FilterSwitch;