import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const FormValidation = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");

  const handleOnNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOnEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnPassChange = (e) => {
    setPassword(e.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (name.length === 0) {
      setNameError("this field is required");
    } else if (name.length > 10) {
      setNameError("maximum length will be 10 characters only");
    } else {
      setNameError("");
    }

    if (email.length === 0) {
      setEmailError("this field is required");
    } else {
      setEmailError("");
    }

    if (password.length === 0) {
      setPassError("this field is required");
    } else {
      setPassError("");
    }
  };
  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={handleOnNameChange}
          />
          <p style={{ color: "red" }}>{nameError}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={handleOnEmailChange}
          />
          <p style={{ color: "red" }}>{emailError}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleOnPassChange}
          />
          <p style={{ color: "red" }}>{passError}</p>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

{
  /* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */
}
