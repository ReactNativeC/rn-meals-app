import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CategoriesScreen = (props) => {
  console.log("props" + props);
  return (
    <View style={styles.screen}>
      <Text>Categories Screen!</Text>
      <Button title="Go to Category Meals" onPress={() => {
        props.navigation.navigate({routeName: 'CategoryMeals'});
      }} />
    </View>
  );  
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});

export default CategoriesScreen;
