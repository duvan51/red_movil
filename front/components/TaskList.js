import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ users }) => {

    
    const renderItem=({ item }) => {
        return (<TaskItem task={item} />)
    }

    return (
        <>
            <FlatList 
                style={{ width:'100%' }}
                data={users}
                keyExtractor={(item) => item.id + " "}
                renderItem={renderItem}
            />
        </>
    );
};

export default TaskList;
