import React, { useState } from "react";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";

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
      <FormComponent
        selectedStudent={selectedStudent}
        clearSelection={clearSelection}
      />
      <TableComponent onEdit={handleEdit} />
    </div>
  );
};

export default Layout;
