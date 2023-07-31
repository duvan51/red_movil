import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'

import {getTask} from '../api';
import TaskList from '../components/TaskList';
import Layout from '../components/Layout';

const HomeScreen=()=> {
 const [users, setUsers] = useState([])


  const loadTask = async()=>{
    const data = await getTask()
    setUsers(data)
  }
  
  useEffect(()=>{
    loadTask()
  },[])
  console.log(users)
  
  return (
    <Layout>
      <TaskList users={users} />
    </Layout>
  )
}
export default HomeScreen;
const styles = StyleSheet.create({})