import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "../redux/slices/studentSlice";

const FormComponent = ({ selectedStudent, clearSelection }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedStudent) {
      setFormData(selectedStudent);
    } else {
      setFormData({ id: "", name: "", phone: "", email: "" });
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedStudent) {
      dispatch(updateStudent({ id: formData.id, updatedData: formData }));
    } else {
      dispatch(addStudent(formData));
    }
    clearSelection();
    setFormData({ id: "", name: "", phone: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-row">
        <label>Mã SV</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
          disabled={!!selectedStudent}
        />
      </div>
      <div className="form-row">
        <label>Họ tên</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <label>Số điện thoại</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="email@gmail.com"
          onChange={handleChange}
          required
        />
      </div>
      <button className="btnAddToStudent" type="submit">
        {selectedStudent ? "Lưu" : "Thêm Sinh Viên"}
      </button>
    </form>
  );
};

export default FormComponent;
