import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home/Home';
import Profile from './src/pages/Profile/';


const Stack = createNativeStackNavigator();


const App = () => {


  return (
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
            <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
            
          </Stack.Navigator>
       </NavigationContainer>
      </>
  );
};


export default App;
