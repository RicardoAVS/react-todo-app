import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 10% 90%;
  height: 100vh;
  width: 100vw;

  .addItem {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .todoList {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;

export const ContentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 2fr 4fr 1.5fr;
  grid-template-rows: 10% 28% 28% 28% auto;
  height: 100vh;
  width: 100vw;
`;
