import { Fragment, useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] =  useState("")

  const callApi = async () => {
    const userInfo = await fetch("http://localhost:3000/user");
    const userData = await userInfo.json();
    console.log(userData);
    setUsers(userData);
  }; 

  const searchAPI = useCallback(async (username) => {
    const userInfo = await fetch(`http://localhost:3000/user/${username}`);
    const userData = await userInfo.json();
    console.log(userData);
    setUsers([userData]);
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (search) {
        searchAPI(search);
      } else {
        callApi();
      }
    }, 1000);
    return () => clearTimeout(debounce);
  }, [search, searchAPI, callApi]);

  return (
    <Fragment>
      <div className="search-box">
      <input type="text" placeholder="Search By Username" onChange={(e)=> setSearch(e.target.value) } />
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}

export default App;
