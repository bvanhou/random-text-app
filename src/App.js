import React, { useState, useEffect} from 'react';
import * as txtgen from 'txtgen';
import { Button } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

function App() {
  const [ randomText, setRandomText ] = useState('');

  const handleTextChange = () =>{
    const _new = txtgen.sentence();
    if(_new !== randomText)
      setRandomText(_new);
  }

  useEffect(()=>{
    setRandomText(txtgen.sentence());
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{randomText}</p>
        <Button name="Generate Text" onClick={handleTextChange}>Generate Text</Button>
      </header>
    </div>
  );
}

export default App;
