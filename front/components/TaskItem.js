import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'



const TaskItem = ({task, handleDelete}) => {

  const navigation = useNavigation();


  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.text} onPress={() => navigation.navigate('TaskFormScreen')}>
        <Text style={styles.itemTitle}>{task.name}</Text>
        <Text style={styles.itemTitle}>{task.email}</Text>
      </TouchableOpacity>
      <View style={styles.Btns}>
        <TouchableOpacity style={styles.btnT}
        onPress={()=> handleDelete(task.id)}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnT} onPress={() => navigation.goBack('TaskFormScreen')}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
      
  )
};

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:"white",
        padding:20,
        marginVertical: 8,
        borderRadius:5,
        flexDirection:"row",
        flex:1,
        justifyContent:"space-between"
       

    },
    itemTitle:{
        color:"black"
    },
    Btns:{
      width:105,
      display:"flex",
      justifyContent:"flex-end",
      gap:2,
      


    },
    btnT:{
      justifyContent: "flex-end",
      backgroundColor:"red",
      borderRadius:5
    }
})


export default TaskItem