import React, { useState } from "react";
import image from "../images/imagebg.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationBar from "./Nav";
import axios from "axios";
const Userform = () => {
  const [result, setResult] = useState();
  const [data, setData] = useState({
    fullname: "",
    email: "",
    aadharnumber: "",
    contactnumber: "",
    dob: "",
    college: "",
    educationlevel: "",
    admissioncategory: "",
    gender: "",
    income: "",
    status: "",
  });
  const {
    fullname,
    email,
    aadharnumber,
    contactnumber,
    dob,
    college,
    educationlevel,
    admissioncategory,
    gender,
    income,
    status,
  } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullname ||
      !email ||
      !aadharnumber ||
      !contactnumber ||
      !dob ||
      !college ||
      !educationlevel ||
      !admissioncategory ||
      !gender ||
      !income ||
      !status
    ) {
      toast.error("Please fill in all the fields");
      return;
    } else if (
      String(contactnumber).length < 10 ||
      String(contactnumber).length > 10
    ) {
      toast.warn("Mobile Number should be 10 digits");
    } else if (
      String(aadharnumber).length < 12 ||
      String(aadharnumber).length > 12
    ) {
      toast.warn("Aadhar number should be 12 digits");
    } else {
      axios
        .post("http://localhost:5000/user", data)
        .then((res) => setResult(res.data));

      if (result === "successfully registred") {
        toast.success("successfully registred");
      } else {
        toast.error("server error");
      }
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${image}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <NavigationBar />
      <div className="d-flex">
        <h1
          className=" p-2 mx-auto fs-2"
          style={{ color: "#4682b4", textAlign: "justify" }}
        >
          Add New Students.
        </h1>
      </div>
      <div className="d-flex">
        <h1
          className=" p-0 mx-auto fs-5 fw-semibold"
          style={{ color: "#add8e6", textAlign: "justify" }}
        >
          Please enter the details carefully.
        </h1>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col-lg-6">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="fullname" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                id="fullname"
                placeholder="Enter Name as in Certificates"
                value={fullname}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                id="email"
                placeholder="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="aadharno" className="form-label">
                AadharNo
              </label>
              <input
                type="number"
                name="aadharnumber"
                className="form-control"
                id="aadharno"
                onChange={handleChange}
                value={aadharnumber}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phoneno" className="form-label">
                Mobile No
              </label>
              <input
                type="number"
                name="contactnumber"
                id="phoneno"
                className="form-control"
                placeholder="Phone Number"
                onChange={handleChange}
                value={contactnumber}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                className="form-control"
                placeholder="Date of Birth"
                onChange={handleChange}
                value={dob}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="collegename" className="form-label">
                College Name
              </label>
              <select
                id="collegename"
                className="form-select"
                name="college"
                value={college}
                onChange={handleChange}
              >
                <option value={""}>Select...</option>
                <option>JNTUA</option>
                <option>MITS</option>
                <option>SVUCE</option>
                <option>SVCE</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="educationallevel" className="form-label">
                Educational Level
              </label>
              <select
                id="educationallevel"
                className="form-select"
                name="educationlevel"
                onChange={handleChange}
                value={educationlevel}
              >
                <option value={""}>Select...</option>
                <option>UG</option>
                <option>PG</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="admcategory" className="form-label">
                Admission Category
              </label>
              <select
                id="admcategory"
                className="form-select"
                name="admissioncategory"
                onChange={handleChange}
                value={admissioncategory}
              >
                <option value={""}>Select...</option>
                <option>Convener</option>
                <option>Management</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                id="gender"
                className="form-select"
                name="gender"
                onChange={handleChange}
                value={gender}
              >
                <option value={""}>Select...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
            <div className="col-md-5">
              <label htmlFor="income" className="form-label">
                Total Income
              </label>
              <input
                type="number"
                className="form-control"
                id="income"
                placeholder="Total Income as in Income certificate"
                name="income"
                onChange={handleChange}
                value={income}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="status" className="form-label">
                Student Current Status
              </label>
              <select
                id="status"
                className="form-select"
                name="status"
                onChange={handleChange}
                value={status}
              >
                <option value={""}>Select...</option>
                <option>Active</option>
                <option>Approved</option>
                <option>Disapproved</option>
              </select>
            </div>
            <div className="mb-4 text-center">
              <br />
              <button className="btn btn-primary" type="submit">
                Add Student
              </button>
              <br />
              <br />
            </div>
          </form>

          <br />
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </div>
  );
};
export default Userform;
