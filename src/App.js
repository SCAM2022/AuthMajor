import React from "react";
import { Routes, Router, Route } from "react-router-dom";
import ImageAuth from "./components/ImageAuth/ImageAuth";
import SetImageAuth from "./components/SetImageAuth/SetImageAuth";
import "./App.css";
import Login from "./page/Login";
import Signup from "./page/Signup";
import { BrowserRouter } from "react-router-dom";
// import * as fs from "fs";
function App() {
  const [page, setPage] = React.useState(1);

  return (
    <div className="App">
      <h1> 3-LEVEL IMAGE AUTHENTICATION </h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
