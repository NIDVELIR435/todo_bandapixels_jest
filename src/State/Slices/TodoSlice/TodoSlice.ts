import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Status } from "Types/EnumStatus";
import { TodoType } from "./TodoType";
import { getAllTask } from "../../../Api/JSONplaceHolder/Tasks";

export type sliceState = {
  todo: Array<TodoType>;
  currentFilterValue: string;
};
const tasksSliceName = "todo";
export const fetchTasks = createAsyncThunk(
  `${tasksSliceName}/fetchTasks`,
  getAllTask
);

export const initialState: sliceState = { todo: [], currentFilterValue: "" };

export const todoSlice = createSlice({
  name: tasksSliceName,
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
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, { payload: todos }) => {
      todos.forEach((task) => {
        state.todo.unshift({
          id: nanoid(10),
          title: task.title,
          description: task.title,
          status: Status.Active,
        });
      });
      console.log(todos);
    });
  },
});
export const {
  actions: { addTask, removeTask, changeStatus, currentFilter },
  reducer: todoReducer,
} = todoSlice;
