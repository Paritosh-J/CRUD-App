import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container px-4 py-3" id="hanging-icons">
      <h2
        className="pb-2 border-bottom"
        style={{
          textAlign: "center",
        }}
      >
        CRUD App
      </h2>
      <div
        className="row g-4 py-3 row-cols-lg-3"
        style={{
          flexDirection: "column",
          flexWrap: "wrap",
          alignContent: "center",
          textAlign: "justify",
        }}
      >
        <div className="col d-flex align-items-start">
          <div>
            <h2>Create</h2>
            <p>Performs the INSERT statement to create a new record.</p>
            <Link
              className="btn btn-success"
              style={{
                marginRight: "5px",
              }}
              to="/users/add"
            >
              Add User
            </Link>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div>
            <h2>Read</h2>
            <p>
              Reads the table records based on the primary keynoted within the
              input parameter.
            </p>
            <Link
              className="btn btn-primary"
              style={{
                marginRight: "5px",
              }}
              to="/users/view"
            >
              View Users
            </Link>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div>
            <h2>Update</h2>
            <p>
              Executes an UPDATE statement on the table based on the specified
              primary key for a record within the WHERE clause of the statement.
            </p>
            <Link
              className="btn btn-warning"
              style={{
                marginRight: "5px",
              }}
              to="/"
            >
              Update User
            </Link>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div>
            <h2>Delete</h2>
            <p>Deletes a specified row in the WHERE clause.</p>
            <Link
              className="btn btn-danger"
              style={{
                marginRight: "5px",
              }}
              to="/"
            >
              Delete User
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
