const urlUsers= "http://192.168.0.28:8081/users"



export const getTask = async()=>{
    const res= await fetch('http://192.168.0.28:8081/users')
    return await res.json()
}