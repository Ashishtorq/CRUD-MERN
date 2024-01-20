import { useState, Fragment, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const callApi = async () => {
    const userInfo = await fetch("http://localhost:3000/user");
    const userData = await userInfo.json();
    console.log(userData);
    setUsers(userData);
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <Fragment>
      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map((user)=>{
            return(
              <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.address}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </Fragment>
  );
}

export default App;