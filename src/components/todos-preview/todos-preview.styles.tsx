import styled from "styled-components";

export const TodosPreviewContainer = styled.div`
  display: flex;
  justify-content: space-around;

  .fas fa-check {
    display: inline-block;
    border: none;
    border-radius: 50%
    height: 2rem
    width: 2rem
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .fas fa-check:hover,
  .fas fa-check:focus {
    background: #0053ba;
  }

  .fas fa-check:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  .fas fa-check:active {
    transform: scale(0.99);
  }
`;
