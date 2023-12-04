import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form'


interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}
interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    subMonths: 3,
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick: 'sergio_serrano',
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
    subMonths: 7,
    description: 'Dapelu hace de moderador a veces'
    
  }
]


function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

 useEffect(() =>{
  setSubs(INITIAL_STATE);
 }, []) //renderizado 
  
  return (
    <div className="App">
      <h1>Ari Dev010</h1>
      <List subs={subs}></List>
      <Form></Form>
      
    </div>
  );
}

export default App;
