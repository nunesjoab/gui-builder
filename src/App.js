import React from 'react';
import logo from './logo.svg';
import './App.css';
import DojotButton from './components/DojotButton/DojotButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DojotButton
          alt=""
          color="primary"
          icon=""
          label="Novo Botão"
          link="javascript:void(0)"
          shape="default"
          size="small"
        />
      </header>
    </div>
  );
}

export default App;
