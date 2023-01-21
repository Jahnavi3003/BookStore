import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import Cart from '../screens/Cart';
import SuccessNote from '../screens/SuccessNote';
import AddBook from '../screens/AddBook';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="SuccessNote" component={SuccessNote} />
        <Stack.Screen name="AddBook" component={AddBook} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppStack