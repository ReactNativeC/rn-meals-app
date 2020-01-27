import React from 'react';
import { Text, View, StyleSheet, Button, Dimensions, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';

const renderListItem = (props, itemData) => {
  return (
    <TouchableOpacity onPress={() => {
      props.navigation.navigate('CategoryMeals', {
        catId : itemData.item.id, 
        title : itemData.item.title,
        color : itemData.item.color
      });
    }}>
      <View style={{...styles.listItem, backgroundColor:itemData.item.color}}>
        <Text style={styles.title}>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
    
  );
}

const CategoriesScreen = (props) => {  
  console.log(CATEGORIES);
  return (
    <View style={styles.screen}>
      <FlatList numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item, index) => item.id}
        renderItem={renderListItem.bind(this, props)}
        style={styles.list}
      />
    </View>       
  );  
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }, 
  list: {
    marginTop: 30,
  },
  listItem: {   
    margin: 10, 
    borderColor: '#ccc',
    borderWidth: 1,
    width: Dimensions.get('window').width /2 - 30,
    height: Dimensions.get('window').width /2 - 30,      
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  title: {
    fontFamily: 'OpenSans-Bold', 
    fontSize: 18,
    color:'white',
  }
});

export default CategoriesScreen;
