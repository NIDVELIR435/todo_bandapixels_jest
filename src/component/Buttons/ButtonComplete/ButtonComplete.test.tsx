import React from "react";
import ButtonComplete from "./ButtonComplete";
import { render, screen } from "@testing-library/react";
import { useAppDispatch } from "State/Hooks";
import userEvent from "@testing-library/user-event";

jest.mock("State/Hooks");

describe("ButtonComplete most:", () => {
  const mockedResult = jest.fn();
  const useAppDispatchMock = useAppDispatch as jest.Mock;
  beforeEach(() => {
    useAppDispatchMock.mockReturnValue(mockedResult);
    render(<ButtonComplete />);
  });
  test("render correct", () => {
    expect(screen).toMatchSnapshot();
  });
  test("call dispatch", () => {
    userEvent.click(screen.getByText("Complete"));
    expect(mockedResult).toBeCalledTimes(1);
  });
});
