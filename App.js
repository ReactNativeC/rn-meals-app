import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import mealsReducer from './store/reducers/meals';
import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

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

  return ( 
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
