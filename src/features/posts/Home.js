import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002", formData);
      alert("Data submitted successfully");
      console.log(response.data);
    } catch (error) {
      alert("Error submitting data: " + error.message);
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name" // Ensure the name attribute is correctly set to match the state keys
          value={formData.name}
          onChange={handleChange}
          type="text" // Changed type from 'name' to 'text'
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email" // Ensure the name attribute is correctly set to match the state keys
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control
          name="age" // Ensure the name attribute is correctly set to match the state keys
          value={formData.age}
          onChange={handleChange}
          type="number" // Changed type from 'name' to 'text'
          placeholder="Enter Age"
        />
      </Form.Group>
      <button variant="primary" type="submit">
        Submit
      </button>
    </Form>
  );
};

export default Home;
