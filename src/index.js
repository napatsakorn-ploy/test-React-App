import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //App.js
import * as serviceWorker from './serviceWorker'; //serviceWorker.js

function tick() {
    const element = (
      <div>
          <center>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </center>
      </div>
    );
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('root'));
  }
  
   // ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

setInterval(tick, 1000);
serviceWorker.unregister();
