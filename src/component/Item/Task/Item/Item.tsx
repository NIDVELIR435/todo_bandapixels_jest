import React from "react";
import { Space, Card, Button, Select } from "antd";
import { removeTask, changeStatus } from "State/Slices/TodoSlice";
import { useAppDispatch } from "State/Hooks";
import { Status } from "Types/EnumStatus";

type Props = {
  id: string;
  title: string;
  description: string;
  status: string;
};

export const Item = (props: Props) => {
  const { Option } = Select;
  const dispatch = useAppDispatch();
  function DeleteTask(): void {
    dispatch(removeTask(props.id));
  }
  function ChangeStatus(status: string): void {
    const Status = status;
    const id = props.id;
    dispatch(changeStatus({ Status, id }));
  }
  const color =
    props.status === Status.Active
      ? "#0050b3"
      : props.status === Status.On_Hold
      ? "#bfbfbf"
      : "#389e0d";
  return (
    <>
      <Space direction="vertical" id={props.id}>
        <Card
          title={props.title}
          style={{
            borderRadius: 5,
            padding: 5,
            width: 300,
            background: `${color}`,
          }}
          extra={
            <>
              <Select
                defaultActiveFirstOption={true}
                style={{ width: 100 }}
                onChange={ChangeStatus}
                defaultValue={props.status}
              >
                <Option value={Status.Active}>Active</Option>
                <Option value={Status.On_Hold}>On hold</Option>
                <Option value={Status.Completed}>Completed</Option>
              </Select>
            </>
          }
        >
          <p>{props.description}</p>
          <Button type="primary" shape="round" onClick={DeleteTask}>
            Delete task
          </Button>
        </Card>
      </Space>
    </>
  );
};
