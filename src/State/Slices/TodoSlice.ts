import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "Types/EnumStatus";
import { TodoType } from "./TodoType";

export type sliceState = {
  todo: Array<TodoType>;
  currentFilterValue: string;
};

export const initialState: sliceState = { todo: [], currentFilterValue: "" };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todo.unshift({
        id: nanoid(10),
        title: action.payload.title,
        description: action.payload.description,
        status: Status.Active,
      });
    },
    removeTask: (state, action) => {
      let IndexUserInArray = state.todo.findIndex(
        (state) => state.id === action.payload
      );
      if (IndexUserInArray !== -1) {
        state.todo.splice(IndexUserInArray, 1);
      }
    },
    changeStatus: (state, action) => {
      let IndexUserInArray = state.todo.findIndex(
        (state) => state.id === action.payload.id
      );
      if (state.todo[IndexUserInArray].status !== action.payload.Status) {
        state.todo[IndexUserInArray].status = action.payload.Status;
      }
    },
    currentFilter: (
      state,
      { payload: category }: PayloadAction<Status | "">
    ) => {
      state.currentFilterValue = category;
    },
  },
});
export const {
  actions: { addTask, removeTask, changeStatus, currentFilter },
  reducer: todoReducer,
} = todoSlice;
