import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const date=new Date();
const currentTime=date.getHours();

let greeting;

if(currentTime<12){
  greeting="Good Morning"
} else if (currentTime<18){
  greeting="Good Afternoon"
}else {
  greeting="Good Night"
}

ReactDOM.render(
  <h1 >{greeting}</h1>,
  document.getElementById('root')  
);

