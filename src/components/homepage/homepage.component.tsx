import React, { useContext, useEffect } from "react";
import { TodosContext } from "../../context/context";

import HeaderComponent from "../header/header.component";
import CardComponent from "../card/card.component";

import {
  HomePageContainer,
  ContentContainer,
  CardContainer,
} from "./homepage.styles";

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <HeaderComponent title="To-Do App" />
      <ContentContainer>
        <CardContainer>
          <div className="addItem">
            <CardComponent
              iconClassName="fas fa-clipboard-list fa-2x"
              labelTitle="ADD ITEM"
              hasInput={true}
            />
          </div>
          <div className="todoList">
            <CardComponent
              iconClassName="fas fa-tasks fa-2x"
              labelTitle="TODO LIST"
              hasInput={false}
            />
          </div>
        </CardContainer>
      </ContentContainer>
    </HomePageContainer>
  );
};

export default HomePage;
