import React, { useState } from "react";
import "./SignUpForm.css";

function SignUpForm() {
  const [userData, setUserData] = useState({
    fullName: "",
    username: "",
    email: "",
    address: "",
    phoneNumber: "",
  });
  const [submittedData, setSubmittedData] = useState(null); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", userData);

    setSubmittedData({ ...userData }); 
    setUserData({
      fullName: "",
      username: "",
      email: "",
      address: "",
      phoneNumber: "",
    });
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={userData.fullName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={userData.address}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={userData.phoneNumber}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="user-data-display">
          <h1>User Data:</h1>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Username: {submittedData.username}</p>
          <p>Email: {submittedData.email}</p>
          <p>Address: {submittedData.address}</p>
          <p>Phone Number: {submittedData.phoneNumber}</p>
        </div>
      )}
    </div>
  );
}

export default SignUpForm;
