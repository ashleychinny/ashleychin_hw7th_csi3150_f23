import React from "react";
import SignUpForm from "./SignUpForm"; // Import the SignUpForm component
import DataFetching from "./DataFetching"; // Import the DataFetching component
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="form-title">User Sign Up</h1>
      <SignUpForm /> {/* Render the SignUpForm component */}
      <DataFetching /> {/* Render the DataFetching component */}
    </div>
  );
}

export default App;
