import React, { useState } from "react";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";
import "./../index.scss";

const Layout = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleEdit = (student) => {
    setSelectedStudent(student);
  };

  const clearSelection = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="app-layout">
      <div className="header">

      <h1 className="header-text">Thông tin sinh viên</h1>
      </div>
      <FormComponent
        selectedStudent={selectedStudent}
        clearSelection={clearSelection}
      />
      <TableComponent onEdit={handleEdit} />
    </div>
  );
};

export default Layout;
