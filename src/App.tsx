import React, { useState, useContext, useEffect, useCallback } from "react";
import "./App.css";

import {
  Todo,
  TodosContext,
  TodoContextData,
  todosContextDefaultValue,
} from "./context/context";

import HomePage from "./components/homepage/homepage.component";

const App = () => {
  const useTodoContextValue = (): TodoContextData => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isAdded, setIsAdded] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [isCompleted, setisCompleted] = useState(false);

    const addTodos = useCallback(
      (description: string) => {
        const id = Math.floor(Math.random() * (1000 - 1) + 1);
        setTodos([
          ...todos,
          {
            id: id,
            description: description,
          },
        ]);
        setIsAdded(true);
      },
      [todos, setTodos]
    );

    const editTodo = useCallback(
      (todoId: number, newDescription: string) => {
        const newTodos = [...todos];
        const editTodoIndex = newTodos.findIndex((todo) => todo.id === todoId);
        if (editTodoIndex > -1) {
          newTodos[editTodoIndex].description = newDescription;
        }
      },
      [todos, setTodos]
    );

    const removeTodo = useCallback(
      (todoId: number) => {
        setIsDone(true);

        const newTodos = [...todos];
        const removedTodoIndex = newTodos.findIndex(
          (todo) => todo.id === todoId
        );
        if (removedTodoIndex > -1) {
          newTodos.splice(removedTodoIndex, 1);
        }
        setTodos(newTodos);
        setIsDone(false);
      },
      [setTodos, todos]
    );

    return {
      todos,
      isAdded,
      isDone,
      isCompleted,
      addTodos,
      editTodo,
      removeTodo,
    };
  };

  return (
    <TodosContext.Provider value={useTodoContextValue()}>
      <HomePage />
    </TodosContext.Provider>
  );
};

export default App;
