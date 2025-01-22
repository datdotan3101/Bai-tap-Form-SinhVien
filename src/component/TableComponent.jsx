import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent } from "../redux/slices/studentSlice";

const TableComponent = ({ onEdit }) => {
  const students = useSelector((state) => state.students.list);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <table className="student-table">
      <thead className="table-head">
        <tr>
          <th>Mã Sinh Viên</th>
          <th>Họ Tên</th>
          <th>Số Điện Thoại</th>
          <th>Email</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.phone}</td>
            <td>{student.email}</td>
            <td>
              <button className="btnEdit" onClick={() => onEdit(student)}>
                Sửa
              </button>
              <button
                className="btnDelete"
                onClick={() => handleDelete(student.id)}
              >
                Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
