import React, {useState} from 'react';
import './App.css';

function App() {
const [state, setState] = useState('');

  return (
    <div className="semaforo">
      <div className = {`red ${state==='red' ? "selectedRed": ""}`} onClick ={()=>setState("red")}></div>
      <div className = {`yellow ${state==='yellow' ? "selectedYellow": ""}`} onClick ={()=>setState("yellow")}></div>
      <div className = {`green ${state==='green' ? "selectedGreen": ""}`} onClick ={()=>setState("green")}></div>
    </div>
    
  );
}

export default App;
