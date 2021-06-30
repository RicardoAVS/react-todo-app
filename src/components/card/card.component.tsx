import React from "react";

import SearchBarComponent from "../search-bar/search-bar.component";
import TodosOverview from "../todos-overview/todos-overview.component";

import { CardContainer, CardContent, CardTop } from "./card.styles";

interface Props {
  iconClassName: string;
  labelTitle: string;
  hasInput: boolean;
}

const CardComponent: React.FC<Props> = ({
  iconClassName,
  labelTitle,
  hasInput,
}) => (
  <CardContainer>
    <CardContent>
      <CardTop>
        <i className={`${iconClassName} icon`}></i>
        <p>{labelTitle}</p>
      </CardTop>
      <hr />
      {hasInput ? (
        <SearchBarComponent
          placeHolder="What do you want to do?"
          iconClassName="fas fa-plus-circle"
          iconSize="fa-lg"
        />
      ) : (
        <TodosOverview></TodosOverview>
      )}
    </CardContent>
  </CardContainer>
);

export default CardComponent;
