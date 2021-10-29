import React from "react";
import { render, screen } from "@testing-library/react";
import { ButtonAll } from "./ButtonAll";
import { useAppDispatch } from "State/Hooks";
import userEvent from "@testing-library/user-event";

jest.mock("State/Hooks");

describe("ButtonAll most:", () => {
  const mockedValue = jest.fn();
  const useAppDispatchMock = useAppDispatch as jest.Mock;

  beforeEach(() => {
    useAppDispatchMock.mockReturnValue(mockedValue);
    render(<ButtonAll />);
  });
  test("correct render", () => {
    expect(screen).toMatchSnapshot();
  });
  test("correct call dispatch", () => {
    userEvent.click(screen.getByTestId("ButtonAll"));
    expect(mockedValue).toBeCalledTimes(1);
  });
});
