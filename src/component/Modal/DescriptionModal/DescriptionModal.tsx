import React from "react";
import { Input, Modal } from "antd";

type Props = {
  showDescriptionModal: boolean;
  hideDescriptionModal: () => void;
  description: string;
  setDescription: (arg: string) => void;
  onConfirmDescription: () => void;
};

export const DescriptionModal: React.FC<Props> = ({
  showDescriptionModal,
  hideDescriptionModal,
  description,
  setDescription,
  onConfirmDescription,
}) => {
  return (
    <Modal
      title="Set description for your task"
      visible={showDescriptionModal}
      onOk={onConfirmDescription}
      onCancel={hideDescriptionModal}
      closable={false}
      destroyOnClose={true}
    >
      <Input
        placeholder="input your description"
        value={description}
        onPressEnter={onConfirmDescription}
        autoFocus={true}
        onChange={(e) => setDescription(e.target.value)}
      />
    </Modal>
  );
};
