import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Store";
import { createSelector } from "@reduxjs/toolkit";
import { Status } from "Types/EnumStatus";
import { TodoType } from "./Slices/TodoSlice/TodoType";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const getVisibilityFilter = (state: RootState) =>
  state.todos.currentFilterValue;
const getTodos = (state: RootState) => state.todos.todo;

const memoSelectorSort = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) =>
    (Object.values(Status) as Array<string>).includes(visibilityFilter)
      ? todos.filter(({ status }) => status === visibilityFilter)
      : todos
);
export const useSortedSelector = () => useAppSelector(memoSelectorSort);

export const useSearchSelector = (searchValue: string): TodoType[] => {
  const data = useAppSelector((state) => state.todos.todo);
  return data.filter(
    (todo) => todo.title.indexOf(searchValue) > -1 && searchValue !== ""
  );
};

export const useCurrentThemeMode = (): boolean =>
  useAppSelector((state) => state.themeMode);
