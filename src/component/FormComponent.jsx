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
    <div>
      <div className="thong-tin">
        <h1 className="thongTin-text">Thông tin sinh viên</h1>
      </div>
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
          <label>Họ Tên</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label>Số Điện Thoại</label>
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
            onChange={handleChange}
            placeholder="email@gmail.com"
            required
          />
        </div>
        <button className="btnThemSV" type="submit">
          {selectedStudent ? "Lưu" : "Thêm Sinh Viên"}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
