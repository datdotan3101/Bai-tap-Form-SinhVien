import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: { list: [] },
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload);
    },
    updateStudent: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.list.findIndex((student) => student.id === id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...updatedData };
      }
    },
    deleteStudent: (state, action) => {
      state.list = state.list.filter((student) => student.id !== action.payload);
    },
  },
});

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
