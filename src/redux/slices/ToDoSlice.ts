import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ToDoItem = { name: string; description: string; date: number };

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
    deleteToDo(state, action: PayloadAction<number>) {
      state.toDos = state.toDos.filter((_, i) => i !== action.payload);
    },
    editToDo(state, action: PayloadAction<{ i: number; text: string }>) {
      state.toDos[action.payload.i].description = action.payload.text;
    },
  },
});

export default toDoSlice.reducer;
export const { addToDo, deleteToDo, editToDo } = toDoSlice.actions;
