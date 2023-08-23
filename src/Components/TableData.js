import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const TableData = () => {
  const [getdata, setGetData] = useState([]);

  useEffect(() => {
    handleGetUserData();
  }, []);

  const handleGetUserData = async () => {
    const response = await fetch("/user/api/getdata", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 400 || !data) {
      console.log("error is getting data");
    } else {
      setGetData(data);
      console.log("Data Get Successfully");
      console.log(getdata);
    }
  };

  const handleDeleteUser = async (id) => {
    const response = await fetch(`/user/api/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 400 || !data) {
      console.log("Error in deleting user");
    } else {
      alert("User Deleted Successfully")
      console.log("User Deleted Successfully");
      handleGetUserData()
    }
  }

  return (
    <>
      <div className="container mt-3">
        <div className="button mt-2 mb-2">
          <Button
            onClick={handleGetUserData}
            style={{ fontSize: "18px" }}
            variant="primary"
            as={Link}
            to="/register"
          >
            +Add Data
          </Button>
        </div>
        <div className="table-data">
          <Table striped bordered hover responsive>
            <thead>
              <tr className="table-dark">
                <th>Id</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Job Role</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {getdata.map((user, id) => {
                return (
                  <>
                    <tr>
                      <td>{id +1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.jobrole}</td>
                      <td>{user.mobile}</td>
                      <td className="btn-icons">
                        <Button variant="info" as={Link} to={`/view/${user._id}`}>
                          <i className="fa-solid fa-eye"></i>
                        </Button>
                        <Button variant="warning" as={Link} to={`/edit/${user._id}`}>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Button>
                        <Button onClick={()=>handleDeleteUser(user._id)} variant="danger">
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TableData;
