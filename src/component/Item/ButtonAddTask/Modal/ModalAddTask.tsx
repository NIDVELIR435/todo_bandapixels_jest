import React, { useState } from "react";
import { Modal, Input } from "antd";

type Props = {
  showModal: boolean;
  setShowModal: Function;
  title: string;
  setTitle: Function;
  description: string;
  setDescription: Function;
  addTaskFunc: Function;
};
export const ModalAddTask = (props: Props): JSX.Element => {
  const [ShowModalDescription, setShowModalDescription] = useState(false);
  function handleOk() {
    props.addTaskFunc();
    props.setTitle("");
    props.setDescription("");
    setShowModalDescription(false);
  }
  function handleCancel() {
    props.setShowModal(false);
    setShowModalDescription(false);
  }
  function descriptionModalOk() {
    props.setShowModal(false);
    setShowModalDescription(true);
  }

  return (
    <>
      <Modal
        title="Set title for your task"
        visible={props.showModal}
        onOk={descriptionModalOk}
        onCancel={handleCancel}
        closable={false}
        destroyOnClose={true}
      >
        <Input
          placeholder="input your title"
          value={props.title}
          onPressEnter={descriptionModalOk}
          onChange={(e) => props.setTitle(e.target.value)}
          autoFocus={true}
        />
      </Modal>
      <Modal
        title="Set description for your task"
        visible={ShowModalDescription}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        destroyOnClose={true}
      >
        <Input
          placeholder="input your description"
          value={props.description}
          onPressEnter={handleOk}
          autoFocus={true}
          onChange={(e) => props.setDescription(e.target.value)}
        />
      </Modal>
    </>
  );
};
