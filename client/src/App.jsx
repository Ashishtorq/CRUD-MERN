import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={}></Route>
        <Route path="/create" element={}></Route>
        <Route path="/update" element={}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
