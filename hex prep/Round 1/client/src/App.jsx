import { useState, Fragment, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [searchId, setSearchId] = useState("");

  const callApi = async () => {
    const userInfo = await fetch("http://localhost:3000/user");
    const userData = await userInfo.json();
    console.log(userData);
    setUsers(userData);
  };

  
  
  const callApiById = useCallback(async (id) => {
    const userInfo = await fetch(`http://localhost:3000/user/${id}`);
    const userData = await userInfo.json();
    console.log(userData);
    setUsers([userData]);
  }, []);

  
    useEffect(() => {
    callApi();
  }, []);

  
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchId) {
        callApiById(searchId);
      } else {
        callApi();
      }
    }, 500);
    return () => clearTimeout(debounce);
  }, [searchId, callApi, callApiById]);

  return (
    <Fragment>
      <h1>User Table</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search By id"
          onChange={(e) => {
            setSearchId(e.target.value);
          }}
        />
      </div>

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
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}

export default App;
