import React, { useState } from "react";
import "./user.css";
import { Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const User = () => {
  const [user, setUser] = useState([
    {
      name: "ashish",
      email: "a@gmail.com",
      age: 20,
    },
  ]);
  return (
    <div>
      <h1>Hello Users</h1>
      <Link to="/create" className="create-link">
        Add+
      </Link>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {user.map((users) => {
            return (
              <tr>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.age}</td>
                <td>
                  <Link to="/update" className="create-link">
                    Update
                  </Link>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
