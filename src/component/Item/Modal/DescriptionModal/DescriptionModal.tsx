import React from "react";
import { Input, Modal } from "antd";

type Props = {
  showDescriptionModal: boolean;
  hideDescriptionModal: () => void;
  description: string;
  setDescription: Function;
  addTaskFunc: Function;
  setTitle: Function;
};
export const DescriptionModal: React.FC<Props> = ({
  showDescriptionModal,
  hideDescriptionModal,
  description,
  setDescription,
  addTaskFunc,
  setTitle,
}) => {
  const confirmAction = () => {
    addTaskFunc();
    setTitle("");
    setDescription("");
    hideDescriptionModal();
  };
  return (
    <Modal
      title="Set description for your task"
      visible={showDescriptionModal}
      onOk={confirmAction}
      onCancel={hideDescriptionModal}
      closable={false}
      destroyOnClose={true}
    >
      <Input
        placeholder="input your description"
        value={description}
        onPressEnter={confirmAction}
        autoFocus={true}
        onChange={(e) => setDescription(e.target.value)}
      />
    </Modal>
  );
};
