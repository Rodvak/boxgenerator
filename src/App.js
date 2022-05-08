import React, { useState } from 'react'
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {

  // I need an empty array to save all the created boxes. I used useState because the array will be changing.
  const [colorBoxes, setColorBoxes] = useState([]);

  // THis function is called in the boxForm and we passed it with props from parent to child.
  const handleNewBox= (newBox) => {
    setColorBoxes([...colorBoxes, newBox])
  }

  // Here I am putting all of the pops inside each component. NOTICE I am passing handleNewBox to the BOxForm & colorBoxes array to the BoxDisplay component.
  return (
    <div className="App">
    <BoxForm onNewBox={handleNewBox}/>
    <BoxDisplay colorBoxes={colorBoxes}/>

    </div>
  );
}

export default App;
