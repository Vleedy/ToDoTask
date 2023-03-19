import { configureStore } from '@reduxjs/toolkit';
import toDos from '../slices/ToDoSlice';

export const store = configureStore({ reducer: { toDos } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
