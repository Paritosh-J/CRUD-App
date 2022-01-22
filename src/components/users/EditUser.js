import React, { useState, useEffect } from "react";
import axios from "axios";

const EditUser = () => {
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
    alert("Details Updated");
  };

  return (
    <div className="container">
      <div className="shadow p-4" style={{
        width: '95%',
        margin: 'auto',
        fontWeight: '600'
      }}>
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter new name"
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
              placeholder="Enter new age"
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
              placeholder="Enter new email"
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
              placeholder="Enter new contact no."
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
              placeholder="Enter new skills"
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
              placeholder="Enter new interests"
              name="interest"
              value={interest}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-outline-warning" type="submit" style={{ color: 'black' }}>
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
