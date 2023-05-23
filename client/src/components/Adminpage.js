import { useState, useEffect } from "react";
import UserList from "./Approveed";
import axios from "axios";
import { Table, Button, Navbar, Nav } from "react-bootstrap";

import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function UserTable() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);

  // Fetch users from API when component mounts
  useEffect(() => {
    axios
      .get("http://localhost:5000/allusers", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setUsers(res.data));
  }, [reload]);
  <UserList users={users} />;
  if (!localStorage.getItem("token")) {
    navigate("/");
  }

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    // Navigate to login page
    navigate("/");
  };

  const handleApprove = (id) => {
    axios
      .put(`http://localhost:5000/allusers/${id}`, { status: "Approved" })
      .then((response) => {
        console.log(response.data);
        setReload(true);
        if (response.data === "User approved") {
          toast.success("User Approved");
        }
        // log the updated user object
        // handle success case
      })
      .catch((error) => {
        console.log(error); // log the error message
        // handle error case
      });
    console.log(id);
  };

  const handleDisapprove = (id) => {
    axios
      .put(`http://localhost:5000/allusers/${id}`, { status: "Disapproved" })
      .then((response) => {
        console.log(response.data);
        setReload(true);
        if (response.data === "User disapproved") {
          toast.error("User disapproved");
        }
        // log the updated user object
        // handle success case
      })
      .catch((error) => {
        console.log(error); // log the error message
        // handle error case
      });
    console.log(id);
  };

  return (
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => user.status === "Active")
            .map((user) => (
              <tr key={user.id}>
                <td>{user.fullname}</td>
                <td>{user.income}</td>
                <td>{user.gender}</td>
                <td>{user.admissioncategory}</td>
                <td>{user.status}</td>
                <td>
                  {user.status === "Active" && (
                    <>
                      <Button
                        variant="success"
                        onClick={() => handleApprove(user._id)}
                      >
                        Approve
                      </Button>

                      <Button
                        variant="danger"
                        onClick={() => handleDisapprove(user._id)}
                      >
                        Disapprove
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </div>
  );
}

export default UserTable;
