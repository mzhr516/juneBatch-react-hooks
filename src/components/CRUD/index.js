import React, { useState } from "react";
import { EmpForm } from "./empForm";
import { EmpTable } from "./empTable";

export const CRUD = () => {
  const [formData, setFormData] = useState({ name: "", age: 0 });
  const [empList, setEmpList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [upDateEmpIndex, setUpdateEmpIndex] = useState(null);

  const CreateEmp = () => {
    setEmpList([...empList, { name: formData.name, age: formData.age }]);
  };

  const upadteEmp = () => {
    const updatedEmpList = empList.map((value, index) => {
      if (index === upDateEmpIndex) {
        return formData;
      } else {
        return value;
      }
    });
    setEmpList(updatedEmpList);
    setIsUpdate(false);
  };

  const submit = (event) => {
    event.preventDefault();
    if (!isUpdate) {
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
    setFormData(empDetails);
    setIsUpdate(true);
    setUpdateEmpIndex(empIndex);
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
