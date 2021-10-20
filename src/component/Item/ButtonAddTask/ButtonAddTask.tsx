import React, { useState } from "react";
import { Button } from "antd";
import { addTask, currentFilter } from "../../../State/Slices/TodoSlice";
import { useAppDispatch } from "../../../State/Hooks";
import { ModalAddTask } from "./Modal/ModalAddTask";

export const ButtonAddTask = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();
  function showModalFunc() {
    setShowModal(true);
  }
  function addTaskFunc() {
    dispatch(addTask({ title, description }));
    dispatch(currentFilter(""));
  }

  return (
    <>
      <ModalAddTask
        showModal={showModal}
        setShowModal={setShowModal}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        addTaskFunc={addTaskFunc}
      />
      <Button onClick={showModalFunc} tabIndex={1}>
        Add task
      </Button>
      <Button disabled tabIndex={2}>
        Press to search
      </Button>
    </>
  );
};
