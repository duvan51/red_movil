const API = "https://localhost:8080/todos"

export const getTask = async() => {
  
    const res = await fetch(API);
    return await res.json();
}

