import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  let [number, setNumber] = useState(45);
  return (
    <ValueContext.Provider value={78}>
    <div>
     Hello World
     <Parent num={number}/>
     <button onClick={() => setNumber(++number)}>update number</button>

    </div>
    </ValueContext.Provider>
  );
}

export default App;
