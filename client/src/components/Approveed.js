import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Navbar, Nav } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function UserList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allusers", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setUsers(res.data));
  }, []);

  // const handleApprove = async (id) => {
  //   const response = await fetch(`http://localhost:5000/users/${id}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ status: 'approved' })
  //   });
  //   const updatedUser = await response.json();
  //   setUsers(users.map(user => user.id === id ? updatedUser : user));
  // };

  // const handleDisapprove = async (id) => {
  //   const response = await fetch(`http://localhost:5000/users/${id}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ status: 'disapproved' })
  //   });
  //   const updatedUser = await response.json();
  //   setUsers(users.map(user => user.id === id ? updatedUser : user));
  //};
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    // Navigate to login page
    navigate("/");
  };

  return (
    // <div>
    //   <h1>All Users</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Email</th>
    //         <th>Status</th>
    //         <th>Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {users.map(user => (
    //         <tr key={user.id}>
    //           <td>{user.name}</td>
    //           <td>{user.email}</td>
    //           <td>{user.status}</td>
    //           <td>
    //             {user.status === 'Approved' ? (
    //               <button disabled>Approved</button>
    //             ) : (
    //               <button onClick={() => handleApprove(user.id)}>Approve</button>
    //             )}
    //             {user.status === 'disapproved' ? (
    //               <button disabled>Disapproved</button>
    //             ) : (
    //               <button onClick={() => handleDisapprove(user.id)}>Disapprove</button>
    //             )}
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
            {" "}
            Scholarships.
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#admin">
              <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#admin">
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={"/admin"}
              >
                Admin
              </Link>
            </Nav.Link>
            <Nav.Link href="#approve">
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={"/approve"}
              >
                Approved
              </Link>
            </Nav.Link>
            <Nav.Link href="#disapprove">
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={"/disapprove"}
              >
                Disapproved
              </Link>
            </Nav.Link>
          </Nav>
          <Button
            variant="outline-danger"
            onClick={handleLogout}
            className="float-end"
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Income</th>
            <th>Gender</th>
            <th>Admission Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => user.status === "Approved")
            .map((user) => (
              <tr key={user.id}>
                <td>{user.fullname}</td>
                <td>{user.income}</td>
                <td>{user.gender}</td>
                <td>{user.admissioncategory}</td>
                <td>{user.status}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
