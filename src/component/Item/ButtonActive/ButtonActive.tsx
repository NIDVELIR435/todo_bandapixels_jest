import React from "react";
import { Button } from "antd";
import { useAppDispatch } from "../../../State/Hooks";
import { currentFilter, Status } from "../../../State/Slices/TodoSlice";

const ButtonActive = (): JSX.Element => {
  const dispatch = useAppDispatch();
  function onClick() {
    dispatch(currentFilter(Status.Active));
  }
  return (
    <>
      <Button tabIndex={4} onClick={onClick}>
        Active
      </Button>
    </>
  );
};
export default ButtonActive;
