import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MealsDetailsScreen = () => {
  retun (
    <View style={styles.screen}>
      <Text>Meals Details Screen!</Text>
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