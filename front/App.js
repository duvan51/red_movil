import { useEffect, useState, React } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen';
import TaskFormScren from './screen/TaskFormScren';



const Stack = createStackNavigator()
const App = ()=> {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App

