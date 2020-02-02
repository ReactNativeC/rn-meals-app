import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import FilterSwitch from '../components/FilterSwitch';
import Colors from '../constants/colors';

const FiltersScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  return (
  <View style={styles.screen}>
    <Text style={styles.title}>Available Filters/Restrictions</Text>    
    <FilterSwitch 
      label='Gluen-Free' 
      state={isGlutenFree} 
      onChange={(newValue) => {setIsGlutenFree(newValue)}} />   
    <FilterSwitch 
      label='Vegan' 
      state={isVegan} 
      onChange={(newValue) => {setIsVegan(newValue)}} />  
    <FilterSwitch 
      label='Vegetarian' 
      state={isVegetarian} 
      onChange={(newValue) => {setIsVegetarian(newValue)}} />  
    <FilterSwitch 
      label='Lactose-Free' 
      state={isLactoseFree} 
      onChange={(newValue) => {setIsLactoseFree(newValue)}} />      
  </View>
  )
};

FiltersScreen.navigationOptions = navData => {
return {
  title: 'Filters',
  headerLeft: () => (
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
    alignItems: 'center'
  }, 
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    margin: 20,
    color: Colors.primaryColor,
  },
});

export default FiltersScreen;