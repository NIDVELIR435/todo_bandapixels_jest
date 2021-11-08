import React from "react";
import { Space, Card, Button, Select, List, Skeleton, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { removeTask, changeStatus } from "State/Slices/TodoSlice/TodoSlice";
import { useAppDispatch, useCurrentThemeMode } from "State/Hooks";
import { Status } from "Types/EnumStatus";

type Props = {
  id: string;
  title: string;
  description: string;
  status: string;
};
enum Colors {
  Blue = "#0050b3",
  White = "#bfbfbf",
  Green = "#389e0d",
}
enum ColorsDark {
  Blue = "#001f47",
  White = "#5f5f5f",
  Green = "#174005",
}

export const ShapeByTodo: React.FC<Props> = (props: Props) => {
  const { Option } = Select;
  const dispatch = useAppDispatch();
  const DeleteTask = (): void => {
    dispatch(removeTask(props.id));
  };
  const ChangeStatus = (status: string): void => {
    const Status = status;
    const id = props.id;
    dispatch(changeStatus({ Status, id }));
  };
  const currentThemeMode = useCurrentThemeMode();
  const color = !currentThemeMode
    ? props.status === Status.Active
      ? Colors.Blue
      : props.status === Status.On_Hold
      ? Colors.White
      : Colors.Green
    : props.status === Status.Active
    ? ColorsDark.Blue
    : props.status === Status.On_Hold
    ? ColorsDark.White
    : ColorsDark.Green;
  return (
    <>
      <List.Item
        actions={[
          <Select
            style={{ backgroundColor: "grey", width: 100 }}
            defaultActiveFirstOption={true}
            onChange={ChangeStatus}
            defaultValue={props.status}
          >
            <Option value={Status.Active}>Active</Option>
            <Option value={Status.On_Hold}>On hold</Option>
            <Option value={Status.Completed}>Completed</Option>
          </Select>,
          <a onClick={DeleteTask} key="list-loadmore-more">
            Delete task
          </a>,
        ]}
      >
        <Skeleton loading={false} avatar title={true} active>
          <List.Item.Meta
            avatar={<Avatar size={32} icon={<UserOutlined />} />}
            title={props.title}
            description={props.description}
          />
          <div>description</div>
        </Skeleton>
      </List.Item>
    </>
  );
};

//
// <Space direction="vertical" id={props.id}>
//     <Card
//         title={props.title}
//         style={{
//             borderRadius: 5,
//             padding: 5,
//             width: 300,
//             height: 200,
//             background: `${color}`,
//         }}
//         extra={
//             <>
//                 <Select
//                     style={{ backgroundColor: "grey", width: 100 }}
//                     defaultActiveFirstOption={true}
//                     onChange={ChangeStatus}
//                     defaultValue={props.status}
//                 >
//                     <Option value={Status.Active}>Active</Option>
//                     <Option value={Status.On_Hold}>On hold</Option>
//                     <Option value={Status.Completed}>Completed</Option>
//                 </Select>
//             </>
//         }
//     >
//         <p>{props.description}</p>
//         <Button type="primary" shape="round" onClick={DeleteTask}>
//             Delete task
//         </Button>
//     </Card>
// </Space>
