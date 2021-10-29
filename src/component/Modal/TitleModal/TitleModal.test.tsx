import React from "react";
import { render, screen } from "@testing-library/react";
import { TitleModal } from "./TitleModal";
import userEvent from "@testing-library/user-event";

describe("ModalAddTask:", () => {
  const hideTitleModalMock = jest.fn();
  const onConfirmTitleMock = jest.fn();
  const setTitleMock = jest.fn();
  beforeEach(() => {
    render(
      <TitleModal
        showTitleModal={true}
        hideTitleModal={hideTitleModalMock}
        title="title"
        onConfirmTitle={onConfirmTitleMock}
        setTitle={setTitleMock}
      />
    );
  });
  test("rendered correctly", () => {
    expect(screen).toMatchSnapshot();
  });
  test("use onChange correct", () => {
    userEvent.type(screen.getByRole("textbox"), "i");
    expect(setTitleMock).toHaveBeenCalledTimes(1);
  });
  test("on press 'enter' call onConfirmTitleMock", () => {
    userEvent.keyboard("{enter}");
    expect(onConfirmTitleMock).toHaveBeenCalledTimes(1);
  });
  test("on click to 'ok' button, call  onConfirmTitleMock", () => {
    userEvent.click(screen.getByText(/ok/i));
    expect(onConfirmTitleMock).toHaveBeenCalledTimes(1);
  });
  test("on press 'esc' call hideTitleModalMock", () => {
    userEvent.keyboard("{esc}");
    expect(hideTitleModalMock).toHaveBeenCalledTimes(1);
  });
  test("on click to 'Cancel' button, call hideTitleModalMock", () => {
    userEvent.click(screen.getByText(/Cancel/i));
    expect(hideTitleModalMock).toHaveBeenCalledTimes(1);
  });
});
