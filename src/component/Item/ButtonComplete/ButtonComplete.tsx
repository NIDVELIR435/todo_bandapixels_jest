import React from "react";
import { Button } from "antd";
import { currentFilter, Status } from "../../../State/Slices/TodoSlice";
import { useAppDispatch } from "../../../State/Hooks";

const ButtonComplete = (): JSX.Element => {
  const dispatch = useAppDispatch();
  function onClick() {
    dispatch(currentFilter(Status.Completed));
  }
  return (
    <>
      <Button tabIndex={6} onClick={onClick}>
        Complete
      </Button>
    </>
  );
};

export default ButtonComplete;