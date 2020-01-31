import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor:'black',
    shadowOffset: { width: 0, hight: 2},
    shadowRadius: 6, 
    shadowOpacity: 0.26,
    elevation: 3,
    backgroundColor : "#0000", 
    
    borderWidth: 0.5, 
    borderColor: 'gray'
  }
});

export default Card;