import { Fragment, useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("")
  const callApi = async () => {
    const userInfo = await fetch("http://localhost:4000/user");
    const userData = await userInfo.json();
    console.log(userData);
    setUsers(userData);
  };
  useEffect(() => {
    callApi();
  }, []);
  const callById = useCallback(async(id)=>{
    const userInfo = await fetch(`http://localhost:4000/user/${id}`);
    const userData = await userInfo.json();
    console.log(userData)
    setUsers([userData])
  },[])
  useEffect(()=>{
    const debounce = setTimeout(()=>{
      if(search){
        callById(search)
      }else{
        callApi()
      }
    },500)
   return ()=> clearTimeout(debounce)
  },[search, callApi, callById])
  return (
    <Fragment>
      
      <div className="search-box">
      <input type="text" placeholder="Search By Id" 
      onChange={(e)=>{
        setSearch(e.target.value)
      }}
      />
      </div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Website</td>
            <td>Company</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
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
