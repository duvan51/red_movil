import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import Task from './components/Task';

export default function App() {
  const [Todos, setTodos] = useState([]);

  useEffect(()=>{
    getUsers();
  },[]);
  

  const getUsers = async ()=>{
    try {
      const url = await fetch("http://192.168.100.7:8080/todos/1");
      const data = await url.json();
      setTodos(data);
     // console.log(data);
    }catch(e){
      console.error(e);
    } 
  }; 



  return (
    <View style={styles.container}>
      <SafeAreaView>
           <FlatList
           data={Todos}
           keyExtractor={(Todos)=> Todos.id}
           renderItem={({ item })=> <Task {...item} />}
           ListHeaderComponent={()=> <Text style={styles.title}>Today</Text>}
           contentContainerStyle={styles.contentContainerStyle}
           />        
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainerStyle:{
    padding:25,
  },
  title: {
    fontWeight:"800",
    fontSize: 28,
    marginBottom:15,
  }
});