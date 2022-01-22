import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const View = () => {
  const [users, setUser] = useState([]);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container py-4">
      <div style={{ marginBottom: "1vh" }}>
        <Link className="btn btn-outline-primary" to="/">
          Back to Home
        </Link>
      </div>
      <ul className="list-group w-50">
        {users.map((user, index) => (
          <>
            <div className="display-4">User Id : {index + 1}</div>
            <li className="list-group-item">Name: {user.userName}</li>
            <li className="list-group-item">Age: {user.age}</li>
            <li className="list-group-item">Email: {user.email}</li>
            <li className="list-group-item">Phone No.: {user.phone}</li>
            <li className="list-group-item">Skills: {user.skill}</li>
            <li className="list-group-item">Interests: {user.interest}</li>
            <br />
          </>
        ))}
      </ul>
    </div>
  );
};

export default View;
