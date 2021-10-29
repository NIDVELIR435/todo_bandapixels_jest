import React from "react";
import { render, screen } from "@testing-library/react";
import { ButtonForDrawerOfSearch } from "./ButtonForDrawerOfSearch";
import { useSearchSelector } from "State/Hooks";
import { TodoType } from "State/Slices/TodoType";
import userEvent from "@testing-library/user-event";

jest.mock("State/Hooks");

describe("ButtonForDrawerOfSearch most:", () => {
  const mapValue: Array<TodoType> = [];
  const useSearchSelectorMock = useSearchSelector as jest.Mock;
  beforeEach(() => {
    useSearchSelectorMock.mockReturnValue(mapValue);
    render(<ButtonForDrawerOfSearch />);
  });
  test("render correct", () => {
    expect(screen).toMatchSnapshot();
  });
  test("render Drawer for search", () => {
    userEvent.click(screen.getByText("Press to search"));
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
