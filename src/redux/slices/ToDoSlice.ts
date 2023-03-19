import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ToDoItem = { name: string; descr: string };

export interface ToDoState {
  toDos: ToDoItem[];
}

const initialState: ToDoState = {
  toDos: [],
};

export const toDoSlice = createSlice({
  name: 'ToDo',
  initialState,
  reducers: {
    addToDo(state, action: PayloadAction<ToDoItem>) {
      state.toDos.push(action.payload);
    },
  },
});

export default toDoSlice.reducer;
export const { addToDo } = toDoSlice.actions;
