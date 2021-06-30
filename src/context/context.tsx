import React from "react";

export interface Todo {
  id: number;
  description: string;
}

export interface TodoContextData {
  todos: Todo[];
  isAdded: boolean;
  isDone: boolean;
  isCompleted: boolean;
  addTodos: (description: string) => void;
  editTodo: (todoId: number, newDescription: string) => void;
  removeTodo: (todoId: number) => void;
}

export const todosContextDefaultValue: TodoContextData = {
  todos: [],
  isAdded: false,
  isDone: false,
  isCompleted: false,
  addTodos: () => null,
  editTodo: () => null,
  removeTodo: () => null,
};

export const TodosContext = React.createContext<TodoContextData>(
  todosContextDefaultValue
);
