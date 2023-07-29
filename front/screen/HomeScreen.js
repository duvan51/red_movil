import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import getTask from '../api'

const HomeScreen = () => {
  
    const[task, setTask]=useState([])


    const loadTask = async () =>{
    const data = await getTask()
    setTask(data)
    }



    useEffect(()=>{
        loadTask()
    }, [])

  
  
  return (
    <View>
      <FlatList 
      data={task}
      renderItem={()=>{
        <Text>hola</Text>
      }}
      
      
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})