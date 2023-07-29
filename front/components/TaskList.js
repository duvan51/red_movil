import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

const TaskList = ({ users }) => {
   
    return
    (<> 
    <FlatList 
        data={users}
        keyExtractor={(item)=>item.id+" "}
        renderItem={({item})=>{
            return (<Text>{item.nal}</Text>)
        }}
     />
     </>
    );
};

export default TaskList;
