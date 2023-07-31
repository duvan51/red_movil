import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Usuarios" 
          component={HomeScreen}
          options={({navigation})=>({
            headerRight:()=> 
              (
                <TouchableOpacity onPress={()=> navigation.navigate('Crear usuario')}>
                    <Text> ADD </Text>
                </TouchableOpacity>
              
              )
          })} 
        />
        <Stack.Screen name="Crear usuario" component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
