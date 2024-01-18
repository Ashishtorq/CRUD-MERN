import { Fragment, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const apiUrl = "http://localhost:9000/user";
  const apiInfo = async () => {
    const userInfo = await fetch(apiUrl);
    const userData = await userInfo.json();
    console.log(userData);
    setUsers(userData);
  };
  useEffect(() => {
    apiInfo();
  });
  const searchHandler = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  const filterUser = users.filter(
    (user) =>
      user.id.toString().includes(search.toLowerCase()) ||
      user.userid.toString().includes(search.toLowerCase())
  );

  return (
    <Fragment>
      <h1>Table</h1>
      <div id="search-box">
        <input
          type="text"
          placeholder="Search By UserId and ID"
          onChange={searchHandler}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>Tittle</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {filterUser.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.userid}</td>
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
