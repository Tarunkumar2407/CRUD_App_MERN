import React, {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import NavScrollExample from "./Navbar";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const View = () => {

  const [getUser, setGetUser] = useState([]);

  const {id} = useParams()

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
      setGetUser(data);
      console.log("User Got Successfully");
      console.log(getUser);
    }
  };

  useEffect(() => {
    handleGetUserData();
    
  }, []);

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
      <NavScrollExample />
      <div className="container">
        <h1 style={{ fontWeight: "400" }}>{`Welcome ${getUser.name}`} </h1>
        <Card sx={{ maxWidth: 1200 }} className="mt-5">
          <CardContent>
            <div style={{ textAlign: "end" }}>
              <Button className="mx-2" variant="warning" as={Link} to={`/edit/${getUser._id}`}>
                <i className="fa-solid fa-pen-to-square"></i>
              </Button>
              <Button onClick={()=>handleDeleteUser(getUser._id)} variant="danger">
                <i className="fa-solid fa-trash"></i>
              </Button>
            </div>
            <div className="row">
              <div className="left-side col-lg-2 col-md-2 col-12">
                <img
                  src="/profile1.png"
                  alt="profile image"
                  style={{ width: "130px" }}
                ></img>
              </div>
                <div className="middle col-lg-5 col-md-5 col-12">
                  <h5>
                    Name :{" "}
                    <span style={{ fontWeight: "400", fontSize: "20px" }}>
                      {getUser.name}
                    </span>
                  </h5>
                  <h5>
                    Age :{" "}
                    <span style={{ fontWeight: "400", fontSize: "20px" }}>
                      {getUser.age}
                    </span>
                  </h5>
                  <h5>
                    <EmailIcon />
                    Email :{" "}
                    <span style={{ fontWeight: "400", fontSize: "20px" }}>
                      {getUser.email}
                    </span>
                  </h5>
                  <h5>
                    <WorkIcon />
                    Occupation :{" "}
                    <span style={{ fontWeight: "400", fontSize: "20px" }}>
                      {getUser.jobrole}
                    </span>
                  </h5>
                </div>

              <div className="right-side col-lg-5 col-md-6 col-5 ">
                <h5>
                  <PhoneAndroidIcon />
                  Mobile :{" "}
                  <span style={{ fontWeight: "400", fontSize: "20px" }}>
                    {getUser.mobile}
                  </span>
                </h5>
                <h5>
                  <PlaceIcon />
                  Location :{" "}
                  <span style={{ fontWeight: "400", fontSize: "20px" }}>
                    {getUser.address}
                  </span>
                </h5>
                <h5>
                  Description :{" "}
                  <span style={{ fontWeight: "400", fontSize: "20px" }}>
                    {getUser.description}
                  </span>
                </h5>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default View;
