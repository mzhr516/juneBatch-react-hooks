import React, { useState } from "react";
import { EmpForm } from "./empForm";
import { EmpTable } from "./empTable";

export const CRUD = () => {
  const [formData, setFormData] = useState({ name: "", age: 0 });
  const [empList, setEmpList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [upDateEmpIndex, setUpdateEmpIndex] = useState(null);
  // console.log(empList);
  const CreateEmp = () => {
    setEmpList([...empList, { name: formData.name, age: formData.age }]);
  };

  const upadteEmp = () => {
    const updatedEmpList = empList.map((emp, index) => {
      if (index == upDateEmpIndex) {
        return { name: formData.name, age: formData.age };
      } else {
        return emp;
      }
    });
    setEmpList(updatedEmpList);
    setIsUpdate(false);
  };

  const submit = (event) => {
    event.preventDefault();
    if (isUpdate === false) {
      CreateEmp();
    } else {
      upadteEmp();
    }

    setFormData({ name: "", age: 0 });
  };

  const onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const onEmpdelete = (empIndex) => {
    const newEmpList = empList.filter((value, index) => index !== empIndex);
    setEmpList(newEmpList);
  };

  const onEmpUpadte = (empDetails, empIndex) => {
    setFormData(empDetails); // to show user details in form
    setIsUpdate(true); // to change the form behavior
    setUpdateEmpIndex(empIndex); // to compair the user from empList
  };

  return (
    <div>
      <EmpForm
        submit={submit}
        formData={formData}
        onInputChange={onInputChange}
      />

      <hr />
      <EmpTable
        empList={empList}
        onEmpdelete={onEmpdelete}
        onEmpUpadte={onEmpUpadte}
      />
    </div>
  );
};
