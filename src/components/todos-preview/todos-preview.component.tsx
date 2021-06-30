import React, { useState, useEffect, useContext } from "react";
import { TodosContext } from "../../context/context";

import { TodosPreviewContainer } from "./todos-preview.styles";

interface Props {
  todoId: number;
  description: string;
}

const TodosPreviewComponent: React.FC<Props> = ({ todoId, description }) => {
  const { addTodos, removeTodo, editTodo } = useContext(TodosContext);
  const [newDescription, setNewDescription] = useState(description);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    console.log(description);
  }, [description]);

  const editTodoField = () => {
    setIsEditable(!isEditable);
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    setNewDescription(value);
  };

  return (
    <TodosPreviewContainer>
      <div>
        <button>
          <span>
            <i className="fas fa-check"></i>
          </span>
        </button>
      </div>
      <div>
        {isEditable ? (
          <input type="text" onChange={handleChange} />
        ) : (
          <p>{newDescription ? newDescription : description}</p>
        )}
      </div>
      <div>
        <button>
          {isEditable ? (
            <i
              onClick={() => {
                setIsEditable(!isEditable);
                editTodo(todoId, newDescription);
              }}
              className="fas fa-download"
            ></i>
          ) : (
            <i onClick={editTodoField} className="far fa-edit"></i>
          )}
        </button>
        <button onClick={() => removeTodo(todoId)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </TodosPreviewContainer>
  );
};
export default TodosPreviewComponent;
