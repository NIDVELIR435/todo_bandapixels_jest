import React, { useState } from "react";
import { Drawer, Input } from "antd";
import { useSearchSelector } from "../../../State/Hooks";
import { Todo } from "../../../State/Slices/TodoSlice";
import { Item } from "../Task/Item/Item";
type Props = {
  visibleStat: Function;
  visible: boolean;
};
export const SearchResultScreen = (props: Props): JSX.Element => {
  const [searchValue, setSearchValue] = useState("");
  const todos = useSearchSelector(searchValue);
  function onChange(e: any) {
    setSearchValue(e.target.value);
  }
  const Items = todos.map((todo: Todo) => (
    <Item
      key={todo.id}
      id={todo.id}
      title={todo.title}
      description={todo.description}
      status={todo.status}
    />
  ));
  return (
    <Drawer
      title={
        <Input
          autoFocus={true}
          placeholder="what you searching?"
          onChange={onChange}
          value={searchValue}
        />
      }
      destroyOnClose={true}
      height="300"
      placement={"top"}
      closable={false}
      onClose={() => {
        props.visibleStat(false);
        setSearchValue("");
      }}
      visible={props.visible}
    >
      {Items}
    </Drawer>
  );
};
