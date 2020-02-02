import React from 'react';
import { View, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

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
        showsVerticalScrollIndicator={false}
      />
    </View>       
  );  
};

CategoriesScreen.navigationOptions = navData => { 
  return {
    title: 'Meal Categories',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item iconName="ios-menu" title="Menu" onPress={()=>{
          navData.navigation.toggleDrawer();
        }} />
      </HeaderButtons>
    )
  }  
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
