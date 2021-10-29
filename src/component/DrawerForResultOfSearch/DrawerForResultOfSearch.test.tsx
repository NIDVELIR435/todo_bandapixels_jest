import React from "react";
import { render, screen } from "@testing-library/react";
import { DrawerForResultOfSearch } from "./DrawerForResultOfSearch";
import { useSearchSelector } from "State/Hooks";
import { TodoType } from "../../State/Slices/TodoType";
import userEvent from "@testing-library/user-event";

jest.mock("State/Hooks");

describe("DrawerForResultOfSearch most:", () => {
  const mockResult: Array<TodoType> = [];
  const useSearchSelectorMock = useSearchSelector as jest.Mock;
  const hideDrawerMock = jest.fn();
  const hideDrawerMockResult = () => jest.mock;

  beforeEach(() => {
    useSearchSelectorMock.mockReturnValue(mockResult);
    hideDrawerMock.mockReturnValue(hideDrawerMockResult);
    render(
      <DrawerForResultOfSearch hideDrawer={hideDrawerMock} showDrawer={true} />
    );
  });
  test("render correct", () => {
    expect(screen).toMatchSnapshot();
  });
  test("correct write text to input field", () => {
    userEvent.type(screen.getByRole("textbox"), "testing text");
    expect(screen.getByRole("textbox")).toHaveValue("testing text");
  });
  test("on change input field", () => {
    userEvent.type(screen.getByRole("textbox"), "test");
    expect(useSearchSelectorMock).toHaveBeenCalledTimes(5);
  });
});
