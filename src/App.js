import React, { useReducer, useState } from 'react';
import './App.css';
import Grandparent from './Grandparent';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  // let [number, setNumber] = useState(45);
  let value = useState(48);
  return (
    <ValueContext.Provider value={value}>
    <div>
     Hello World
     <Parent />
      {/* <Parent num={number}/> */}
     {/*  <button onClick={() => setNumber(++number)}>update number</button> */}
     <Grandparent />
    </div>
    </ValueContext.Provider>
    
  );
}

export default App;
