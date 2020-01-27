import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';

const fontFetch = () => {
  return Font.loadAsync({
    "OpenSans": require('./fonts/OpenSans-Regular.ttf'),
    "OpenSans-Bold": require('./fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(!fontsLoaded)
    return (
      <AppLoading 
        startAsync={fontFetch} 
        onFinish={() => setFontsLoaded(true)} />
    );

  return <MealsNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
