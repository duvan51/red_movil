import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  
//
  
    useEffect(()=>{
      obtenerDatos() 
    },[])

  const obtenerDatos = async () =>{
    const data= await axios.get('http://localhost:8080/users/1');

    console.log(data)
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
