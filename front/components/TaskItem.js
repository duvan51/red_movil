import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TaskItem = ({task}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{task.name}</Text>
      <Text style={styles.itemTitle}>{task.email}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:"white",
        padding:20,
        marginVertical: 8,
        borderRadius:5
    },
    itemTitle:{
        color:"black"
    }
})


export default TaskItem