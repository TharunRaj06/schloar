import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
const NavigationBar = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [found, setFound] = useState(false);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/adminlogin", data).then((res) => {
      localStorage.setItem("token", res.data.token);
      setData("");
      setFound(true);
    });
  };
  if (found) {
    navigate("/admin");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
          {" "}
          Scholarships.
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">
            <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="#">
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={"/userform"}
            >
              Userform
            </Link>
          </Nav.Link>
        </Nav>
        <Form inline onSubmit={handleSubmit}>
          <Row>
            <Col>
              <FormControl
                type="email"
                name="email"
                placeholder="Email"
                className="mr-sm-2"
                onChange={changeHandler}
              />
            </Col>
            <Col>
              <FormControl
                type="password"
                name="password"
                placeholder="Password"
                className="mr-sm-2"
                onChange={changeHandler}
              />
            </Col>
            <Col>
              <Button type="submit" variant="outline-success">
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
