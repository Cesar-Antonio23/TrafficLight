import React, {useState} from 'react';
import './App.css';

function App() {
const [state, setState] = useState('');

  return (
    <div className="semaforo">
      <div className = "red"></div>
      <div className = "yellow"></div>
      <div className = "green"></div>
    </div>
    
  );
}

export default App;
