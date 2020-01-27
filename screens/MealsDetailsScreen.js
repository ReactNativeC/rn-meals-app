import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const MealsDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Meals Details Screen!</Text>
      <Button title='Go back to Category Meals' onPress={ () => {
        props.navigation.pop();
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealsDetailsScreen;