import React from 'react';
import { Text, View, StyleSheet, Button, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';


const renderListItem = (props, itemData) => {
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={() => {
        props.navigation.navigate('CategoryMeals', {
          categoryId: itemData.item.id
        })
      }} />      
  );
}

const CategoriesScreen = (props) => {  
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

CategoriesScreen.navigationOptions = {
  title: 'Meal Categories',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',   
  }, 
  list: {
    marginTop: 30,
  },
});

export default CategoriesScreen;
