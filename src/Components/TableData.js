import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const TableData = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="button mt-2 mb-2">
          <Button style={{fontSize: "18px"}} variant="primary">+Add Data</Button>
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
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>mark@gmail.com</td>
                <td>developer</td>
                <td>9745654215</td>
                <td className="btn-icons">
                  <Button variant="info">
                    <i class="fa-solid fa-eye"></i>
                  </Button>
                  <Button variant="warning">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Button>
                  <Button variant="danger">
                    <i class="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TableData;
