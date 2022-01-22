import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [user, setUser] = useState({
    userName: "",
    age: "",
    email: "",
    phone: "",
    skill: "",
    interest: "",
  });

  const { userName, age, email, phone, skill, interest } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    alert("Record Added");
  };


  return (
    <div className="container">
      <div className="shadow p-4" style={{
          width: '95%',
          margin: 'auto',
          fontWeight: '600'
        }}>
        <h2 className="text-center mb-4">Add User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={userName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={age}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contact No.</label>
            <input
              type="number"
              className="form-control"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Skills</label>
            <input
              type="text"
              className="form-control"
              name="skill"
              value={skill}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Interests</label>
            <input
              type="text"
              className="form-control"
              name="interest"
              value={interest}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-outline-success" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
