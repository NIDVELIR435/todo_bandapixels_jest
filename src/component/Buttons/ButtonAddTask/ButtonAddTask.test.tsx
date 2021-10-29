import React from "react";
import { render, screen } from "@testing-library/react";
import { ButtonAddTask } from "./ButtonAddTask";
import userEvent from "@testing-library/user-event";

jest.mock("State/Hooks");

describe("ButtonAddTask:", () => {
  beforeEach(() => {
    render(<ButtonAddTask />);
  });
  test("rendered correctly", () => {
    expect(screen).toMatchSnapshot();
  });
  test("on click to button 'Add task' show Title Modal", () => {
    userEvent.click(screen.getByText(/Add task/i));
    expect(screen.queryByText(/Set title for your task/i)).toBeInTheDocument();
  });
});
