import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form'
import { Sub } from './types';


interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'Taylor Swift',
    avatar: 'https://m.media-amazon.com/images/I/71x91GKXipL.__AC_SX300_SY300_QL70_ML2_.jpg',
    subMonths: 1,
    description: 'Released on October 24, 2006'
  },
  {
    nick: 'Fearless',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_Swift.png',
    subMonths: 2,
    description: 'Released on April 9, 2021'
    
  }
]


function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

 useEffect(() =>{
  setSubs(INITIAL_STATE);
 }, []) //renderizado 

 const handleNewSub = (newSub: Sub): void => {
  setSubs(subs => [...subs, newSub])
 }
  
  return (
    <div className="App" ref={divRef}>
      <h1>Ari Dev010</h1>
      <List subs={subs}></List>
      <Form onNewSub={handleNewSub}></Form>
      
    </div>
  );
}

export default App;
