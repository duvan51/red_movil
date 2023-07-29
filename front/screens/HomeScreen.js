import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'

import {getTask} from '../api';
import TaskList from '../components/TaskList';

const HomeScreen=()=> {
 const [users, setUsers] = useState([])


  const loadTask = async()=>{
    const data = await getTask()
    setUsers(data)
  }
  
  useEffect(()=>{
    loadTask()
  },[])
  
  return (
    <View>
      <TaskList users={users} />
    </View>
  )
}
export default HomeScreen;
const styles = StyleSheet.create({})