const urlUsers= "http://192.168.0.28:8081/users"



export const getTask = async()=>{
    const res= await fetch(urlUsers)
    return await res.json()
}
export const getTasks = async(id)=>{
    const res = await fetch (`${urlUsers}/${id}`);
    return await res.json();
}


export const createUser = async(createUser)=>{
    const res= await fetch
        (urlUsers,
          {method: 'POST', 
          headers: {Accept:"application/json", "Content-Type": "application/json"},
          body: JSON.stringify(createUser)
        })
    return await res.json()
}


export const deleteTask = async(id)=>{
    await fetch(`${urlUsers}/${id}`, {
        method: "DELETE"
    })  
}

