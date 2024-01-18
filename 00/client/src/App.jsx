import { Fragment, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./Component/User";
import Updateuser from "./Component/Updateuser";
import Createuser from "./Component/Createuser";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/create" element={<Createuser />}></Route>
          <Route path="/update" element={<Updateuser />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
