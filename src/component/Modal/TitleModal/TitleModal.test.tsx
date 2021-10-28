import React from "react";
import { render, screen } from "@testing-library/react";
import { Props, TitleModal } from "./TitleModal";
import userEvent from "@testing-library/user-event";

describe("ModalAddTask:", () => {
  let props: Props;
  beforeEach(() => {
    props = {
      showTitleModal: true,
      hideTitleModal: jest.fn(),
      title: "title for first test",
      onConfirmTitle: jest.fn(),
      setTitle: jest.fn(),
    };
  });
  test("rendehttps://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_roler correct snapshot", () => {
    render(<TitleModal {...props} />);
    expect(screen).toMatchSnapshot();
  });
  test("not rendered", () => {
    // const Modal = screen;
    // let Mocked = jest.fn(props.hideTitleModal);
    render(<TitleModal {...props} />);
    userEvent.type(screen.getByRole("textbox"), "title");
    // expect(props.setTitle).toBeCalledTimes(5);
    expect(screen.getByRole("textbox")).toHaveValue("title");
  });
});
