import React, { useState, useCallback, useEffect, useContext } from "react";
import { TodosContext, Todo } from "../../context/context";

import { SearchBarContainer, InputContainer } from "./search-bar.styles";

interface Props {
  placeHolder: string;
  iconClassName: string;
  iconSize: string;
}

const SearchBarComponent: React.FC<Props> = ({
  placeHolder,
  iconClassName,
  iconSize,
}) => {
  const [description, setDescription] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const { todos, addTodos } = useContext(TodosContext);

  const handleChange = (event: any) => {
    const { value } = event.target;
    setDescription(value);
  };

  return (
    <SearchBarContainer>
      <InputContainer>
        <input type="text" placeholder={placeHolder} onChange={handleChange} />
      </InputContainer>
      <div>
        <i
          onClick={() => addTodos(description)}
          className={`${iconClassName} ${iconSize} addIcon`}
        ></i>
      </div>
    </SearchBarContainer>
  );
};

export default SearchBarComponent;
