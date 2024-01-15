import React, { Fragment, useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const apiFn = async () => {
    const userData = await fetch("http://localhost:3001/user/v1");
    const userInfo = await userData.json();
    console.log(userInfo);
    setUsers(userInfo);
  };
  useEffect(() => {
    apiFn();
  });
  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const filterUser = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.id.toString().includes(search.toLowerCase())
  );
  return (
    <Fragment>
      <div id="search-box">
        <input
          type="text"
          placeholder="Seach by username"
          id="input-box"
          onChange={searchHandler}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>UserName</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filterUser.map((user) => (
            <tr id={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default App;
