import React, { useEffect, useState } from "react";
import "./user.css";
import { Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const User = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((result) => setUser(result.data))
      .catch((e) => console.log(e));
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete("http://localhost:8000/delete/" + id)
      .then((result) => {
        console.log(result);
        alert("Data Deletd");
      })
      .catch((e) => console.log(e));
  };
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
                <td>{users.Name}</td>
                <td>{users.Email}</td>
                <td>{users.Age}</td>
                <td>
                  <Link to={`/update ${users._id}`} className="create-link">
                    Update
                  </Link>
                  <button onClick={(e) => deleteHandler(users._id)}>
                    Delete
                  </button>
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
