import { Fragment, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const apiUrl = "http://localhost:9000/user";
  const apiInfo = async () => {
    const userInfo = await fetch(apiUrl);
    const userData = await userInfo.json();
    // console.log(userData);
    setUsers(userData);
  };
  useEffect(() => {
    apiInfo();
  });
  const searchAPI = async (id) => {
    const apiInfo = await fetch(`${apiUrl}/${id}`);
    const userInfo = await apiInfo.json();
    console.log(userInfo)
    setUsers([userInfo]);
  };
  return (
    <Fragment>
      <h1>Table</h1>
      <div id="search-box">
        <input
          type="text"
          placeholder="Search By UserId and ID"
          className="input-box"
          onKeyDown={(e) => {
            console.log(e.target.value)
            if (e.key === "Enter") {
              searchAPI(e.target.value);
            }
          }}
        />
      </div>
      <table className="table-container">
        <thead className="tabel-head">
          <tr className="table-row">
            <th className="table-head">ID</th>
            <th className="table-head">UserId</th>
            <th className="table-head">Tittle</th>
            <th className="table-head">Body</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.userId}</td>
                <td>{user.title}</td>
                <td>{user.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}

export default App;
