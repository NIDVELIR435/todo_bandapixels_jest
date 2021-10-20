import React from "react";
import { useFilteredSelector } from "../../../State/Hooks";
import { Item } from "./Item/Item";
import { Todo } from "../../../State/Slices/TodoSlice";

export const Task: React.FC = () => {
  const data = useFilteredSelector();

  const Items = data.map((todo: Todo) => (
    <Item
      key={todo.id}
      id={todo.id}
      title={todo.title}
      description={todo.description}
      status={todo.status}
    />
  ));

  return <>{Items}</>;
};
