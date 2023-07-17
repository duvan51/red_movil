import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(()=>{
    fetchData();
  }, []);
  
  async function fetchData(){
    const response = await fetch("http://localhost:8080/todos/1");
    const data = await response.json();
    setTodos(data);
  }

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(todos)}</Text>
      <StatusBar style="auto" />
    </View>
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
