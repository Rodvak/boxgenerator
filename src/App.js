import React, { useState } from 'react'
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {

  const [currentBox, setCurrentBoxes] = useState("");
  
  const [colorBoxes, setColorBoxes] = useState([]);

  const handleNewBox = (newBox) => {
    setCurrentBoxes(newBox)
    setColorBoxes([...colorBoxes, newBox])
  }

  return (
    <div className="App">
    <BoxForm onNewBox={handleNewBox}/>
    <BoxDisplay currentBox={currentBox} colorBoxes={colorBoxes}/>

    </div>
  );
}

export default App;
