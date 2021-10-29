import React from "react";
import { Button } from "antd";
import { useAppDispatch } from "../../../State/Hooks";
import { currentFilter } from "../../../State/Slices/TodoSlice";

export const ButtonAll: React.FC = () => {
  const dispatch = useAppDispatch();
  function onClick() {
    dispatch(currentFilter(""));
  }
  return (
    <>
      <Button
        tabIndex={3}
        data-testid="ButtonAll"
        onClick={onClick}
        style={{ marginLeft: 50, marginTop: 10 }}
      >
        All
      </Button>
    </>
  );
};
