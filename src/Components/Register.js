import React, { useState } from "react";
import NavScrollExample from "./Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [input , setInput] = useState({
    name: "",
    email: "",
    age: "",
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

  const handleAddUser = async () => {
    const {name, email, age, mobile, jobrole, address, description} = input

    const response = await fetch('/user/api/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name, email, age, mobile, jobrole, address, description
      }),
    })
    const data = await response.json()
    console.log(data)

    if(response.status === 400 || !data){
      console.log("error is getting response")
      alert("Error in Adding User")
    }else{
      alert("Data Added Successfully")
      navigate("/")
    }
  }

  return (
    <div>
      <NavScrollExample />
      <div className="container">
        <h2>ADD DATA</h2>
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

            <Button onClick={handleAddUser} className="mt-3" style={{width: "300px", marginLeft: "12px"}} variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
