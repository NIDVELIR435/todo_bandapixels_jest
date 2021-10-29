import React from "react";
import { render, screen } from "@testing-library/react";
import { FieldForTodos } from "./FieldForTodos";
import { useFilteredSelector } from "State/Hooks";
import { TodoType } from "../../State/Slices/TodoType";

jest.mock("State/Hooks");

describe("FieldForTodos most:", () => {
  const mockReturnValue: Array<TodoType> = [];
  const useFilteredSelectorMock = useFilteredSelector as jest.Mock;
  beforeEach(() => {
    useFilteredSelectorMock.mockReturnValue(mockReturnValue);
    render(<FieldForTodos />);
  });
  test("correct render", () => {
    expect(screen).toMatchSnapshot();
  });
  test("ShapeByTodo not to be render", () => {
    expect(screen.queryByTestId("ShapeByTodo")).not.toBeInTheDocument();
  });
});
