import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CategoriesScreen = () => {
  return (
    <View>
      <Text>Categories Screen!</Text>
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
