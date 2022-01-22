import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
//Context
import MusicApiContext from "./components/playerApp/context/MusicApiContext";
import ManageContext from "./context/ManageContext";

ReactDOM.render(
  <MusicApiContext>
    <ManageContext>
      <App />
    </ManageContext>
  </MusicApiContext>,
  document.getElementById("root")
);
