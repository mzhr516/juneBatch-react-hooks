import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

export const CRUD = () => {
  const [formData, setFormData] = useState({ name: "", age: 0 });
  const [empList, setEmpList] = useState([]);
  const [isUpdate, setIsupdate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);
  
  const submit = (event) => {
    event.preventDefault();

    if (!isUpdate) {
      setEmpList([...empList, { name: formData.name, age: formData.age }]);
    } else {
      const updatedEmpList = empList.map((value, index) => {
        if (index === updateIndex) {
          return { name: formData.name, age: formData.age };
        } else {
          return value;
        }
      });
      setEmpList(updatedEmpList);
    }

    setFormData({ name: "", age: 0 });
  };

  const onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const onEmpdelete = (empIndex) => {
    const newEmpList = empList.filter((value, index) => {
      if (empIndex !== index) {
        return value;
      }
    });
    setEmpList(newEmpList);
  };

  const onEmpUpadte = (name, age, index) => {
    setIsupdate(true);
    setFormData({ name, age });
    setUpdateIndex(index);
  };
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

      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {empList?.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>
                  <Button
                    onClick={() => onEmpUpadte(value.name, value.age, index)}
                  >
                    update
                  </Button>{" "}
                  <Button onClick={() => onEmpdelete(index)}>delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
