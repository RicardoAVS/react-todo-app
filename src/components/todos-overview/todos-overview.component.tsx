import React, { useContext, useEffect } from "react";

import SearchBarComponent from "../search-bar/search-bar.component";

import { TodosContext } from "../../context/context";

import { TodosOverviewContainer } from "./todos-overview.styles";
import TodosPreview from "../todos-preview/todos-preview.component";
import TodosPreviewComponent from "../todos-preview/todos-preview.component";

const TodosOverview: React.FC = () => {
  const { todos, isDone, isCompleted } = useContext(TodosContext);

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <TodosOverviewContainer>
      {!isDone && todos.length > 0
        ? todos.map((todo, i) => (
            <TodosPreviewComponent
              key={i}
              todoId={todo.id}
              description={todo.description}
            ></TodosPreviewComponent>
          ))
        : null}
    </TodosOverviewContainer>
  );
};

export default TodosOverview;
