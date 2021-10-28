import React from "react";
import { ModalAddTask } from "./ModalAddTask";
import { render, screen } from "@testing-library/react";
import { Props } from "./PropsType";

describe("ModalAddTask:", () => {
  let props: Props;
  beforeEach(() => {
    render(<ModalAddTask {...props} />);
  });
  test("render correct snapshot", () => {
    const Modal = screen;
    expect(Modal).toMatchSnapshot();
  });
});
