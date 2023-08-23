import React, { useState, useEffect } from "react";
import NavScrollExample from "./Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {

  const navigate = useNavigate()
  // const [getUser, setGetUser] = useState([]);
  const {id} = useParams()

  const [input , setInput] = useState({
    name: "",
    age: "",
    email: "",
    mobile: "",
    jobrole: "",
    address: "",
    description: ""
  })

  const handleInput = (e) => {
    console.log(e.target.value)
    const {name, value} = e.target
    setInput((preval)=> {
      return {
        ...preval,
        [name]: value
      }
    })
  }

  const handleGetUserData = async () => {
    const response = await fetch(`/user/api/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 400 || !data) {
      console.log("error is getting user");
    } else {
      setInput(data);
      console.log("User Got Successfully");
    }
  };

  useEffect(() => {
    handleGetUserData();
  }, []);

  const handleUpdateUser = async () => {
    const {name, email, age, mobile, jobrole, address, description} = input
    const response = await fetch(`/user/api/updateuser/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name, email, age, mobile, jobrole, address, description
      }),
    })
    const data = await response.json()
    console.log(data)

    if (response.status === 400 || !data) {
      console.log("Error in updating user");
    } else {
      setInput(data);
      alert("Data Updated Successfully")
      console.log("User Updated Successfully");
      navigate("/")
    }
  }

  return (
    <div>
      <NavScrollExample />
      <div className="container">
        <h2>EDIT DATA</h2>
        <Form>
          <div className="row">
            <Form.Group
              className="md-3 mt-3 col-lg-6 col-md-6 col-12"
              controlId="formBasicEmail"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={handleInput} name="name" value={input.name} type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group
              className="md-3 mt-3 col-lg-6 col-md-6 col-12"
              controlId="formBasicPassword"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={handleInput} name="email" value={input.email} type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group
              className="md-3 mt-3 col-lg-6 col-md-6 col-12"
              controlId="formBasicPassword"
            >
              <Form.Label>Age</Form.Label>
              <Form.Control onChange={handleInput} name="age" value={input.age} type="number" placeholder="Age" />
            </Form.Group>
            <Form.Group
              className="md-3 mt-3 col-lg-6 col-md-6 col-12"
              controlId="formBasicPassword"
            >
              <Form.Label>Mobile</Form.Label>
              <Form.Control onChange={handleInput} name="mobile" value={input.mobile} type="number" placeholder="Mobile" />
            </Form.Group>
            <Form.Group
              className="md-3 mt-3 col-lg-6 col-md-6 col-12"
              controlId="formBasicPassword"
            >
              <Form.Label>Job Role</Form.Label>
              <Form.Control onChange={handleInput} name="jobrole" value={input.jobrole} type="text" placeholder="Job Role" />
            </Form.Group>
            <Form.Group
              className="md-3 mt-3 col-lg-6 col-md-6 col-12"
              controlId="formBasicPassword"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control onChange={handleInput} name="address" value={input.address} type="text" placeholder="Address" />
            </Form.Group>

            <InputGroup className="mt-3" style={{minHeight: "100px"}} >
              <InputGroup.Text>Description</InputGroup.Text>
              <Form.Control onChange={handleInput} name="description" value={input.description} as="textarea" aria-label="With textarea" />
            </InputGroup>

            <Button onClick={handleUpdateUser} className="mt-3" style={{width: "300px", marginLeft: "12px"}} variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Edit
