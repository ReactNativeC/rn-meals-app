import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import Colors from '../constants/colors';
import Card from '../components/card';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const CategoryGridTile = (props) => {
  let TouchComponent = TouchableOpacity;
  if(Platform.OS === 'android' && Platform.Version >= 21)
    TouchComponent = TouchableNativeFeedback;

  return (
    <View style={styles.listItem}>
      <TouchComponent onPress={() => props.onPress()} >    
          <Card style={{ ...styles.container, backgroundColor: props.color, }}>        
            <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
          </Card>       
      </TouchComponent>
    </View>    
  );
}

const styles = StyleSheet.create({
  listItem: {       
    margin: 10, 
    borderColor: '#ccc',
    overflow: Platform.OS == 'android' && Platform.Version >=21 ? 'hidden' : 'visible',
    elevation: 10,
    borderRadius: 35,
  }, 
  container: {
    flex: 1,
    width: Dimensions.get('window').width /2 - 30,
    height: Dimensions.get('window').width /2 - 30,      
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 35,
    padding: 20,  
  },
  title: {
    fontFamily: 'OpenSans-Bold', 
    fontSize: Dimensions.get('window').width < 350?  18 : 21,
    textAlign: 'right'
  }
});

export default CategoryGridTile;