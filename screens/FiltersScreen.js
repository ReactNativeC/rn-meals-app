import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FiltersScreen = () => {
  return (
  <View style={styles.screen}>
    <Text>Filters Screen!</Text>
  </View>
  )
};

FiltersScreen.navigationOptions = navData => {
return {
  title: 'Filters',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item iconName="ios-menu" title="Menu" onPress={() => {
        navData.navigation.toggleDrawer()
      }}
      />
    </HeaderButtons>
  )
    
  
}
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default FiltersScreen;