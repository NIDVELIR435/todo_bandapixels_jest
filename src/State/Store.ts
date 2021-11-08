import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./Slices/TodoSlice/TodoSlice";
import { ThemeModeReducer } from "./Slices/ThemeModeSlice/ThemeModeSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    themeMode: ThemeModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
