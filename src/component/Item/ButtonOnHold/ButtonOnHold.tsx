import React from "react";
import { Button } from "antd";
import { useAppDispatch } from "../../../State/Hooks";
import { currentFilter, Status } from "../../../State/Slices/TodoSlice";

export const ButtonOnHold = (): JSX.Element => {
  const dispatch = useAppDispatch();
  function onClick() {
    return dispatch(currentFilter(Status.On_Hold));
  }
  return (
    <Button tabIndex={5} onClick={onClick}>
      On Hold
    </Button>
  );
};
