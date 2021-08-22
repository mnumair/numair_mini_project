import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
let greeting = "";
let currDate = new Date();
// 2020,5,5,9
currDate = currDate.getHours();
const cssStyle = {};
if(currDate >=1 && currDate <12){
  greeting = "Good Morning";
  cssStyle.color = "Green";
}
else if (currDate >= 12 && currDate <19){
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
}
else {
  greeting = "Good Night";
  cssStyle.color = "Black"
}

ReactDOM.render(
  <>
    <div>
    <h1>
      Hello Dear, <span style = {cssStyle}>{greeting}</span>
    </h1>
    </div>
  </>,
  document.getElementById("root")
);