import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const ValidationWithLibrary = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({ reValidateMode: "onSubmit" });

  const submit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(submit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            {...register("name", {
              required: { value: true, message: "please enter your name" },
            })}
          />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Name"
            {...register("age", {
              min: { value: 18, message: "age not be less than 18" },
              max: { value: 45, message: "age not be greater than 45" },
            })}
          />
          <p style={{ color: "red" }}>{errors.age?.message}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            {...register("email", {
              required: { value: true, message: "please enter your email id" },
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "invalidate email",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "please fill password field" },
              minLength: { value: 5, message: "length must be greater than 5" },
              maxLength: {
                value: 10,
                message: "length not be greater than 10",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {isSubmitSuccessful && <h1>form submitted succesfully</h1>}
    </div>
  );
};
