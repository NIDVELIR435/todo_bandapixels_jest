import React from "react";
import { render, screen } from "@testing-library/react";
import { ButtonOnHold } from "./ButtonOnHold";
import { useAppDispatch } from "State/Hooks";
import userEvent from "@testing-library/user-event";

jest.mock("State/Hooks");

describe("ButtonOnHold most:", () => {
  const dispatchMock = jest.fn();
  const useAppDispatchMock = useAppDispatch as jest.Mock;
  beforeEach(() => {
    useAppDispatchMock.mockReturnValue(dispatchMock);
    render(<ButtonOnHold />);
  });
  afterEach(() => {
    dispatchMock.mockRestore();
  });
  test("correct render", () => {
    expect(screen).toMatchSnapshot();
  });
  test("call dispatch once", () => {
    userEvent.click(screen.getByRole("button"));
    expect(dispatchMock).toHaveBeenCalledTimes(1);
  });
  test("call dispatch twice", () => {
    userEvent.dblClick(screen.getByRole("button"));
    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).not.toHaveBeenCalledTimes(4);
  });
});
