import { Fragment, useEffect, useState } from "react";
import axios from "axis";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const userData = async () => {
    const userInfo = await fetch("http://localhost:3001/user/v1");
    const getData = await userInfo.json();
    console.log(getData);
    setUsers(getData);
  };
  useEffect(() => {
    userData();
  });
  return (
    <Fragment>
      <h1>HOme</h1>
    </Fragment>
  );
}

export default App;
