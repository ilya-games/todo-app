import { createSlice } from "@reduxjs/toolkit";
import store from "..";

const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    toDos: [],
    toDosCount: 0,
    lastId: 1
  },
  reducers: {
    addToDo: (state, action) => {
      const payload = action.payload
      const newToDo = {...payload, id: state.lastId}
      state.toDos = [...state.toDos, newToDo]
      state.toDosCount = state.toDos.length
      state.lastId += 1
    },
    resetToDos: (state, action) => {
      state.toDos = []
      state.toDosCount = 0
      state.lastId = 1
    }
  }
});

export const { addToDo, resetToDos } = toDoSlice.actions;
export default toDoSlice.reducer;
