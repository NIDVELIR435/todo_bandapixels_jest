import React, { useState } from "react";
import { Modal, Input } from "antd";

type Props = {
  showModalTitle: boolean;
  setShowModalTitle: Function;
  setShowDescriptionModal: Function;
  title: string;
  setTitle: Function;
};
export const TitleModal = (props: Props): JSX.Element => {
  const handleOk = () => {
    props.setTitle("");
    props.setShowDescriptionModal(false);
  };
  const onConfirm = () => {
    props.setShowModalTitle(false);
    props.setShowDescriptionModal(true);
  };
  return (
    <>
      <Modal
        title="Set title for your task"
        visible={props.showModalTitle}
        onOk={onConfirm}
        onCancel={() => props.setShowModalTitle(false)}
        closable={false}
        destroyOnClose={true}
      >
        <Input
          placeholder="input your title"
          value={props.title}
          onPressEnter={onConfirm}
          onChange={(e) => props.setTitle(e.target.value)}
          autoFocus={true}
        />
      </Modal>
    </>
  );
};
