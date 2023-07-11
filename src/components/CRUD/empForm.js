import React from "react";
import { Button, Form } from "react-bootstrap";

export const EmpForm = ({ submit, formData, onInputChange }) => {
  return (
    <div>
      <h1>create operation</h1>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            name="age"
            value={formData.age}
            onChange={onInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
