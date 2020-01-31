import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import { useScreens, enableScreens } from 'react-native-screens';

enableScreens();

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
