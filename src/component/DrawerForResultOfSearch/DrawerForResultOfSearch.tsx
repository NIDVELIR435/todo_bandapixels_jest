import { Drawer, Input } from "antd";
import React, { useState } from "react";
import { useSearchSelector } from "../../State/Hooks";
import { ShapeByTodo } from "../ShapeByTodo/ShapeByTodo";
type Props = {
  hideDrawer: () => void;
  showDrawer: boolean;
};
export const DrawerForResultOfSearch: React.FC<Props> = ({
  hideDrawer,
  showDrawer,
}) => {
  const [inputValue, setInputValue] = useState("");
  const data = useSearchSelector(inputValue);
  const mappedData = data.map((todo) => (
    <ShapeByTodo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      description={todo.description}
      status={todo.status}
    />
  ));
  const onChange = (e: string): void => {
    setInputValue(e);
  };
  return (
    <Drawer
      title={
        <Input
          autoFocus={true}
          value={inputValue}
          placeholder="what do you search"
          onChange={(e) => onChange(e.target.value)}
          tabIndex={1}
        />
      }
      placement="top"
      closable={false}
      visible={showDrawer}
      onClose={hideDrawer}
      destroyOnClose={true}
      height={300}
    >
      {mappedData}
    </Drawer>
  );
};
