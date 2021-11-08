import React from "react";
import { useSortedSelector } from "State/Hooks";
import { ShapeByTodo } from "../ShapeByTodo/ShapeByTodo";
import { Spin } from "antd";
import { TodoType } from "../../State/Slices/TodoSlice/TodoType";

export const FieldForTodos: React.FC = () => {
  const todos = useSortedSelector();
  const Items = todos.map((todo: TodoType) => (
    <ShapeByTodo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      description={todo.description}
      status={todo.status}
    />
  ));

  return <>{todos.length > 0 ? Items : <Spin size="large" />}</>;
};
