import { Fragment, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const userInfo = async () => {
    const userData = await fetch("http://localhost:3000/user");
    const Data = await userData.json();
    console.log(Data);
    setUsers(Data);
  };

  useEffect(() => {
    userInfo();
  }, []);

  let debounceTimeout;

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;

    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      setSearch(searchValue);
    }, 1000); // delay in milliseconds
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.address.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.id.toString().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Fragment>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Name, Email, Id, Username"
          onChange={handleSearchChange}
        />
      </div>
      <table className="tab-container">
        <thead className="t-head">
          <tr className="t-row">
            <th className="t-head">Name</th>
            <th className="t-head">id</th>
            <th className="t-head">UserName</th>
            <th className="t-head">Address</th>
            <th className="t-head">Phone</th>
            <th className="t-head">Email</th>
            <th className="t-head">Company</th>
            <th className="t-head">Website</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.company}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default App;
