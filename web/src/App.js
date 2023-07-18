import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  
  

  const [data, setData] = React.useState(null)
  React.useEffect(()=>{
    console.log("hello")
    obtenerDatos()
  },[])

  const obtenerDatos = async () =>{
    const data= await fetch('http://localhost:8080/users/2');
    const tareas= await data.json()
    console.log(tareas)
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
