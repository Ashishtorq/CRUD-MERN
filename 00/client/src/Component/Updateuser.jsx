import React from "react";
import "./update.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Createuser = () => {
  return (
    <div>
      <h1>Hello create User</h1>
      <form action="" className="form-container">
        <div className="frm">
          <label htmlFor=""></label>
          <input type="text" placeholder="Enter Name" className="inpt" />
        </div>
        <div className="frm">
          <label htmlFor=""> </label>
          <input type="text" placeholder="Enter Email" className="inpt" />
        </div>
        <div className="frm">
          <label htmlFor=""></label>
          <input type="text" placeholder="Enter Age" className="inpt" />
        </div>
        <button className="btn">Update</button>
      </form>
    </div>
  );
};

export default Createuser;
