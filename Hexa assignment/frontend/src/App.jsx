import React, { Fragment, useEffect, useState } from "react";
import Todo from "./Components/Todo";
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const callApi = async () => {
    const userInfo = await fetch("http://localhost:3000/user");
    const userData = await userInfo.json();
    setUsers(userData);
  };

  useEffect(() => {
    callApi();
  }, []);

  const RowClick = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <Fragment>
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
          {users.map((user) => (
            <tr key={user.id} onClick={() => RowClick(user.id)}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUserId && <Todo userId={selectedUserId} />}
    </Fragment>
  );
};

export default App;
