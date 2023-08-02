import { View, Text, TextInput, StyleSheet, TouchableOpacity, onChangeText } from 'react-native'
import React, {useState} from 'react'
import Layout from '../components/Layout'

import { createUser } from "../api"

const TaskFormScreen = () => {
  
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
  })
  
  const handleChange = (name, value)=> setUser({...user, [name]:value});
  
  const handleSubmit = ()=>{
    createUser(user)
  }


  return (
    <Layout>
      <TextInput 
      style={styles.input}
      placeholder='name'
      placeholderTextColor="gray"
      onChangeText={(text)=>handleChange("name",text)}
      />
      <TextInput
      style={styles.input} 
      placeholder='email'
      placeholderTextColor="gray"
      onChangeText={(text)=>handleChange("email",text)}
      />
      <TextInput 
      style={styles.input}
      placeholder='password'
      placeholderTextColor="gray"
      onChangeText={(text)=>handleChange("password",text)}
      />
      <TouchableOpacity
      style={styles.ButtonSave}
      onPress={handleSubmit}
      >
        <Text
        style={styles.Button_text}
        > GUARDAR </Text>
      </TouchableOpacity>
    </Layout>
  )
}

const styles = StyleSheet.create({
  input:{
    width:"90%",
    height:40,
    padding:10,
    backgroundColor:"white",
    marginTop:10,
    borderColor:"black",
    borderWidth:1,
    borderRadius:3,
    fontSize:16
  },
  ButtonSave:{
    paddingTop:10,
    paddingBottom:10,
    borderRadius: 5,
    marginTop:10,
    backgroundColor:"white",
    borderColor:"black",
    width:"90%"
  },
  Button_text:{
    color:"grey",
    textAlign:"center"

  }
})

export default TaskFormScreen;