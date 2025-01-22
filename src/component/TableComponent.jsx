import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent } from "../redux/slices/studentSlice";
import "./../index.scss";

const TableComponent = ({ onEdit }) => {
  const students = useSelector((state) => state.students.list);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter((student) => {
    const term = searchTerm.toLowerCase();
    return (
      student.id.toLowerCase().includes(term) ||
      student.name.toLowerCase().includes(term) ||
      student.phone.toLowerCase().includes(term) ||
      student.email.toLowerCase().includes(term)
    );
  });

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div>
      <div className="search-bar">
        <input
          className="input-search"
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="student-table">
        <thead>
          <tr className="table-header">
            <th>Mã Sinh Viên</th>
            <th>Họ Tên</th>
            <th>Số Điện Thoại</th>
            <th>Email</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td>
                <button className="btnEditToStudent" onClick={() => onEdit(student)}>Sửa</button>
                <button className="btnDeleteToStudent" onClick={() => handleDelete(student.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
