import React from 'react';
import Post from './Post';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Post>
        <h2>ploy22</h2>
      </Post>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
