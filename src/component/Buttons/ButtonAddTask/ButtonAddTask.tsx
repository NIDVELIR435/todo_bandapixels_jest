import React, { useState } from "react";
import { Button } from "antd";
import { addTask, currentFilter } from "State/Slices/TodoSlice";
import { useAppDispatch } from "State/Hooks";
import { TitleModal } from "../../Modal/TitleModal/TitleModal";
import { DescriptionModal } from "../../Modal/DescriptionModal/DescriptionModal";

export const ButtonAddTask: React.FC = () => {
  const [showTitleModal, setShowTitleModal] = useState(false);
  const [showDescriptionModal, setDescriptionModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();
  const showModalFunc = () => {
    setShowTitleModal(true);
  };
  const addTaskFunc = () => {
    dispatch(addTask({ title, description }));
    dispatch(currentFilter(""));
  };
  const hideDescriptionModal = (): void => setDescriptionModal(false);
  const hideTitleModal = (): void => setShowTitleModal(false);
  const onConfirmTitle = (): void => {
    hideTitleModal();
    setDescriptionModal(true);
  };
  const onConfirmDescription = (): void => {
    addTaskFunc();
    setTitle("");
    setDescription("");
    hideDescriptionModal();
  };
  return (
    <>
      <TitleModal
        showTitleModal={showTitleModal}
        hideTitleModal={hideTitleModal}
        onConfirmTitle={onConfirmTitle}
        title={title}
        setTitle={setTitle}
      />
      <DescriptionModal
        showDescriptionModal={showDescriptionModal}
        hideDescriptionModal={hideDescriptionModal}
        description={description}
        setDescription={setDescription}
        onConfirmDescription={onConfirmDescription}
      />

      <Button onClick={showModalFunc} tabIndex={1}>
        Add task
      </Button>
    </>
  );
};
