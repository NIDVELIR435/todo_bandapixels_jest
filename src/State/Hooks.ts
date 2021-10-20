import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Store";
import { createSelector } from "@reduxjs/toolkit";
import { Status } from "./Slices/TodoSlice";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const getVisibilityFilter = (state: RootState) =>
  state.todos.currentFilterValue;
const getTodos = (state: RootState) => state.todos.todo;

export const memoSelector = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) =>
    (Object.values(Status) as Array<string>).includes(visibilityFilter)
      ? todos.filter(({ status }) => status === visibilityFilter)
      : todos
);

export const useFilteredSelector = () => {
  return useAppSelector(memoSelector);
};
