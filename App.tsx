
import React from 'react';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import HomeScreen from './screens/homeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from './screens/gameScreen';


export type ScreenNames = ["Home", "Game", "History", "Settings"] // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    <Stack.Screen
       name='Game'
       component={GameScreen}
       options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default App;
