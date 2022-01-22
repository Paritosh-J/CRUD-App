import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUser(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();
  };
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container" style={{
      width: '95%',
      margin: 'auto',
      marginTop: '1em',
      marginBottom: '7em'
    }}>
      <div className="py4">
        <table className="table shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Skills</th>
              <th scope="col">Interests</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.userName}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.skill}</td>
                <td>{user.interest}</td>

                <td style={{
                  alignContent: 'center'
                }}>
                  <Link
                    className="btn btn-warning"
                    style={{
                      marginRight: '5px'
                    }}
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
