import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
//Context
import ManageContext from "./context/ManageContext";

ReactDOM.render(
  <ManageContext>
    <App />
  </ManageContext>,
  document.getElementById("root")
);


     
