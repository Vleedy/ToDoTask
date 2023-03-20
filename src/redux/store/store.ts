import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import toDos from '../slices/ToDoSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const authPersistConfig = {
  key: 'toDos',
  storage,
};

const rootReducer = combineReducers({
  toDosReducer: persistReducer(authPersistConfig, toDos),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const createStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
