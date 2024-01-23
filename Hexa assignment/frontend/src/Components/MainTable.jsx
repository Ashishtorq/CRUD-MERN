import React, { Fragment, useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Todo from "./Todo";
import "../App.css";

const MainTable = () => {
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
              <td>
                <Link to={`/${user.id}`}>{user.id}</Link>
              </td>
              <td>
                <Link to={`/${user.id}`}>{user.name}</Link>
              </td>
              <td>
                <Link to={`/${user.id}`}>{user.username}</Link>
              </td>
              <td>
                <Link to={`/${user.id}`}>{user.email}</Link>
              </td>
              <td>
                <Link to={`/${user.id}`}>{user.address}</Link>
              </td>
              <td>
                <Link to={`/${user.id}`}>{user.phone}</Link>
              </td>
              <td>
                <Link to={`/${user.id}`}>{user.website}</Link>
              </td>
              <td>
                <Link to={`/${user.id}`}>
                {user.company}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUserId && <Todo userId={selectedUserId} />}
    </Fragment>
  );
};

export default MainTable;
