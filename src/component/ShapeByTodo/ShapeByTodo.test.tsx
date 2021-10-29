import React from "react";
import { render, screen } from "@testing-library/react";
import { ShapeByTodo } from "./ShapeByTodo";
import userEvent from "@testing-library/user-event";
import { useAppDispatch } from "State/Hooks";

jest.mock("State/Hooks");

describe("ShapeByTodo:", () => {
  const returnedValueByMock = jest.fn();
  const useAppDispatchMock = useAppDispatch as jest.Mock;
  beforeEach(() => {
    useAppDispatchMock.mockReturnValue(returnedValueByMock);

    render(
      <ShapeByTodo
        id={"1"}
        title={"title"}
        description={"description"}
        status={"On_Hold"}
      />
    );
  });
  test("rendered correctly", () => {
    expect(screen).toMatchSnapshot();
  });
  test("on click to button 'Delete task' most call useAppDispatchMock", () => {
    userEvent.click(screen.getByText(/Delete task/i));
    expect(returnedValueByMock).toHaveBeenCalledTimes(1);
  });
});
