import React from "react";
import "./create.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Createuser = () => {
  return (
    <div>
      <h1>Hello create User</h1>
      <form action="">
        <div className="frm">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter Name" />
        </div>
        <div className="frm">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter Email" />
        </div>
        <div className="frm">
          <label htmlFor="">Age</label>
          <input type="text" placeholder="Enter Age" />
        </div>
        <button className="btn-btn-success">submit</button>
      </form>
    </div>
  );
};

export default Createuser;
