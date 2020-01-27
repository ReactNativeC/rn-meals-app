import React from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';

const renderListItem = (itemData) => {
  return (
    <View style={styles.listItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
}

const CategoriesScreen = (props) => {  
  console.log(CATEGORIES);
  return (
    <View style={styles.screen}>
      <FlatList numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item, index) => item.id}
        renderItem={renderListItem}
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
  }
});

export default CategoriesScreen;
