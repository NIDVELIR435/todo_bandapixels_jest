import React from "react";
import { useFilteredSelector } from "State/Hooks";
import { ShapeByTodo } from "../ShapeByTodo/ShapeByTodo";
import { TodoType } from "State/Slices/TodoType";

export const FieldForTodos: React.FC = () => {
  const data = useFilteredSelector();

  const Items = data.map((todo: TodoType) => (
    <ShapeByTodo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      description={todo.description}
      status={todo.status}
    />
  ));

  return <>{Items}</>;
};
