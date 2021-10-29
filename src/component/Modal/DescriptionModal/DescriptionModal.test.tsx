import React from "react";
import { render, screen } from "@testing-library/react";
import { DescriptionModal } from "./DescriptionModal";
import userEvent from "@testing-library/user-event";

describe("DescriptionModal most:", () => {
  const setDescriptionMock = jest.fn();
  const hideDescriptionModalMock = jest.fn();
  const onConfirmDescriptionMock = jest.fn();
  beforeEach(() => {
    render(
      <DescriptionModal
        showDescriptionModal={true}
        hideDescriptionModal={hideDescriptionModalMock}
        description={"description"}
        setDescription={setDescriptionMock}
        onConfirmDescription={onConfirmDescriptionMock}
      />
    );
  });
  test("rendered correctly", () => {
    expect(screen).toMatchSnapshot();
  });
  test("use onChange correct", () => {
    userEvent.type(screen.getByRole("textbox"), "i");
    expect(setDescriptionMock).toHaveBeenCalledTimes(1);
  });
  test("on press 'enter' call onConfirmDescriptionMock", () => {
    userEvent.keyboard("{enter}");
    expect(onConfirmDescriptionMock).toHaveBeenCalledTimes(1);
  });
  test("on click to 'ok' button, call  onConfirmDescriptionMock", () => {
    userEvent.click(screen.getByText(/ok/i));
    expect(onConfirmDescriptionMock).toHaveBeenCalledTimes(1);
  });
  test("on press 'esc' call hideDescriptionModalMock", () => {
    userEvent.keyboard("{esc}");
    expect(hideDescriptionModalMock).toHaveBeenCalledTimes(1);
  });
  test("on click to 'Cancel' button, call hideDescriptionModalMock", () => {
    userEvent.click(screen.getByText(/Cancel/i));
    expect(hideDescriptionModalMock).toHaveBeenCalledTimes(1);
  });
});
