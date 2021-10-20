import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
export enum Status {
  Active = "Active",
  On_Hold = "On_Hold",
  Completed = "Completed",
}
export type Todo = {
  id: string;
  title: string;
  description: string;
  status: Status;
};
export type sliceState = {
  todo: Array<Todo>;
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
    searchTask: (state, action) => {
      function SearchIndex(item: any) {
        return item.description.indexOf(action.payload) > -1 ? true : false;
      }
      function inputSearchFUNC() {
        return state.todo.filter((item) => SearchIndex(item));
      }
      return {
        ...state,
        filterContain: inputSearchFUNC(),
      };
    },
  },
});
export const {
  actions: { addTask, removeTask, changeStatus, currentFilter, searchTask },
  reducer: todoReducer,
} = todoSlice;
