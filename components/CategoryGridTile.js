import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../constants/colors';
import Card from '../components/Card';

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity onPress={ () => props.onPress()}>
    <Card>
      <View style={{ ...styles.listItem, backgroundColor: props.color }}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {   
    margin: 10, 
    borderColor: '#ccc',
    borderWidth: 1,
    width: Dimensions.get('window').width /2 - 30,
    height: Dimensions.get('window').width /2 - 30,      
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  }, 
  title: {
    fontFamily: 'OpenSans-Bold', 
    fontSize: 18,
    color:'white',
  }
});

export default CategoryGridTile;