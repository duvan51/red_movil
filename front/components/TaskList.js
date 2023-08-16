import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import TaskItem from './TaskItem';
import {deleteTask, getTask} from '../api'

const TaskList = () => {

    const [users, setUsers] = useState([])
    const [refreshing, setRefresing] = useState(false)


    const loadTask = async()=>{
      const data = await getTask()
      setUsers(data) 
    }    

    useEffect(()=>{
      loadTask()
    },[])
    

    const handleDelete = async (id)=>{
        await deleteTask(id)
        await loadTask()
    }

    const renderItem=({ item }) => {
        return (<TaskItem task={item} handleDelete={handleDelete} />)
    }


    const onRefresh = React.useCallback(async ()=>{
        setRefresing(true);
        await loadTask()
        setRefresing(false);
    })

    return (
        <>
            <FlatList 
                style={{ width:'100%' }}
                data={users}
                keyExtractor={(item) => item.id + " "}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing}
                        colors={["black"]}
                        onRefresh={onRefresh}
                    
                    />
                }
            />
        </>
    );
};

export default TaskList;
