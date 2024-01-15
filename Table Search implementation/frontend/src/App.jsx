import { Fragment, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const userInfo = async () => {
    const userData = await fetch("http://localhost:3000/user");
    const Data = await userData.json();
    console.log(Data);
    setUsers(Data);
  };
  useEffect(() => {
    userInfo();
  });
  return (
    <Fragment>
    <div className="search-bar">
    <input type="text" placeholder="Enter Name" />
    <button>Search</button>
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
          {users.map((user) => {
            return (
              <tr className="t-row" key={user.id}>
                <td className="t-data">{user.name}</td>
                <td className="t-data">{user.id}</td>
                <td className="t-data">{user.username}</td>
                <td className="t-data">{user.address}</td>
                <td className="t-data">{user.phone}</td>
                <td className="t-data">{user.email}</td>
                <td className="t-data">{user.company}</td>
                <td className="t-data">{user.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}

export default App;
