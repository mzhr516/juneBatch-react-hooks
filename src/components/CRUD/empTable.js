import React from "react";
import { Button, Table } from "react-bootstrap";

export const EmpTable = ({ empList, onEmpUpadte, onEmpdelete }) => {
  return (
    <div>
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
                    onClick={() => {
                      onEmpUpadte(value, index);
                    }}
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
