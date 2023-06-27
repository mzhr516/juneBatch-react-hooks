import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const ObtimizeFormValidation = () => {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };
  const initilaErrormessage = {
    nameError: "",
    emailError: "",
    passwordError: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState(initilaErrormessage);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  };

  const submit = (event) => {
    event.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      setFormData(initialFormData)
    } else {
      setIsSuccess(false);
    }
  };
  const validate = () => {
    const { name, email, password } = formData;
    let formError = { nameError: "", emailError: "", passwordError: "" };
    if (name.length === 0) {
      formError.nameError = "this field is required";
    } else {
      formError.nameError = "";
    }
    if (email.length === 0) {
      formError.emailError = "this field is required";
    } else {
      formError.emailError = "";
    }
    if (password.length === 0) {
      formError.passwordError = "this field is required";
    } else {
      formError.passwordError = "";
    }
    setErrorMessage(formError);
    if (
      !formError.nameError &&
      !formError.emailError &&
      !formError.passwordError
    ) {
      return true;
    } else {
      return false;
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
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <p style={{ color: "red" }}>{errorMessage.nameError}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <p style={{ color: "red" }}>{errorMessage.emailError}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <p style={{ color: "red" }}>{errorMessage.passwordError}</p>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {isSuccess && <>form submited successfuly</>}
    </div>
  );
};
