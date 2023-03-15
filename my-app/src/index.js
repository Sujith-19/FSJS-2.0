import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pi,{doublePi} from './App';

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>3</li>
  </ul>,
  document.getElementById('root')  
);

