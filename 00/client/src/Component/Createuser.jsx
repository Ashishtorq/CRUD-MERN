import React, { useState } from "react";
import "./create.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Createuser = () => {
  const [Name, setName] = useState({});
  const [Email, setEmail] = useState({});
  const [Age, setAge] = useState({});
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/createuser", { Name, Email, Age })
      .then((result)=>{
        console.log(result)
        navigate("/")
        alert("Data uploaded")
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h1>Hello create User</h1>
      <form action="" onSubmit={Submit} className="form-container">
        <div className="frm">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="inpt"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="frm">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            className="inpt"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="frm">
          <label htmlFor="">Age</label>
          <input
            type="text"
            placeholder="Enter Age"
            className="inpt"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button className="btn-btn-success">submit</button>
      </form>
    </div>
  );
};

export default Createuser;
