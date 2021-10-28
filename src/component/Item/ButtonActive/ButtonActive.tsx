import React from "react";
import { Button } from "antd";
import { useAppDispatch } from "State/Hooks";
import { currentFilter } from "State/Slices/TodoSlice";
import { Status } from "../../../Types/EnumStatus";

const ButtonActive = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const onClick = () => dispatch(currentFilter(Status.Active));
  return (
    <>
      <Button data-testid="ButtonActive" tabIndex={4} onClick={onClick}>
        Active
      </Button>
    </>
  );
};
export default ButtonActive;
