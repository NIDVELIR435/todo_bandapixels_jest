import React from "react";
import { Modal, Input } from "antd";

export type Props = {
  showTitleModal: boolean;
  hideTitleModal: () => void;
  title: string;
  onConfirmTitle: () => void;
  setTitle: (arg: string) => void;
};

export const TitleModal: React.FC<Props> = ({
  showTitleModal,
  hideTitleModal,
  title,
  onConfirmTitle,
  setTitle,
}) => {
  return (
    <>
      <Modal
        title="Set title for your task"
        visible={showTitleModal}
        onOk={onConfirmTitle}
        onCancel={hideTitleModal}
        closable={false}
        destroyOnClose={true}
      >
        <Input
          placeholder="input your title"
          value={title}
          onPressEnter={onConfirmTitle}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus={true}
        />
      </Modal>
    </>
  );
};
