import React, { useState } from "react";
import { Button } from "antd";
import { addTask, currentFilter } from "State/Slices/TodoSlice";
import { useAppDispatch } from "State/Hooks";
import { TitleModal } from "../Modal/TitleModal/TitleModal";
import { DescriptionModal } from "../Modal/DescriptionModal/DescriptionModal";

export const ButtonAddTask = (): JSX.Element => {
  const [showModalTitle, setShowModalTitle] = useState(false);
  const [showDescriptionModal, setDescriptionModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();
  const showModalFunc = () => {
    setShowModalTitle(true);
  };
  const addTaskFunc = () => {
    dispatch(addTask({ title, description }));
    dispatch(currentFilter(""));
  };
  const hideDescriptionModal = () => setDescriptionModal(false);

  return (
    <>
      <TitleModal
        showModalTitle={showModalTitle}
        setShowModalTitle={setShowModalTitle}
        setShowDescriptionModal={setDescriptionModal}
        title={title}
        setTitle={setTitle}
      />
      <DescriptionModal
        showDescriptionModal={showDescriptionModal}
        hideDescriptionModal={hideDescriptionModal}
        description={description}
        setDescription={setDescription}
        addTaskFunc={addTaskFunc}
        setTitle={setTitle}
      />

      <Button onClick={showModalFunc} tabIndex={1}>
        Add task
      </Button>
    </>
  );
};
