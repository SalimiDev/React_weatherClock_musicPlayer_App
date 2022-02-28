import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
//Context
import MusicApiContext from "./components/playerApp/context/MusicApiContext";
import ManageContext from "./context/ManageContext";

ReactDOM.render(
  <BrowserRouter>
    <MusicApiContext>
      <ManageContext>
        <App />
      </ManageContext>
    </MusicApiContext>
  </BrowserRouter>,

  document.getElementById("root")
);
