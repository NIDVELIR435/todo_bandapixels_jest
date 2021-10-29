import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonActive from "./ButtonActive";
import userEvent from "@testing-library/user-event";
import { useAppDispatch } from "State/Hooks";

jest.mock("State/Hooks");

describe("ButtonActive:", () => {
  const dispatchMock = jest.fn();
  const useAppDispatchMock = useAppDispatch as jest.Mock;

  beforeEach(() => {
    useAppDispatchMock.mockReturnValue(dispatchMock);
    render(<ButtonActive />);
  });
  test("to match snapshot", () => {
    expect(screen).toMatchSnapshot();
  });
  test("call dispatch which change status", () => {
    userEvent.click(screen.getByTestId("ButtonActive"));
    expect(dispatchMock).toHaveBeenCalledTimes(1);
  });
  test("render screen correct", () => {
    expect(screen.getByTestId("ButtonActive")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
