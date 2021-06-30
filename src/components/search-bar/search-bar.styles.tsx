import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 86%;
    height: 100%;
    padding-left: 1rem;

    .addIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 0.3rem;
        height: 0.3rem;
        padding: 1rem;
        border-radius: 50%;
        color: #181A1B

    }

    [placeholder]:focus::-webkit-input-placeholder {
        transition: text-indent 0.4s 0.4s ease; 
        text-indent: -100%;
        opacity: 1;
     }
`;

export const InputContainer = styled.div`
    width: 100%;

    input {
      width: 92%;
      font-weight: bold;
      border: none;
      border-bottom: 1px solid rgb(161, 152, 140);
      outline: none;
      padding: 5px 10px;
    }

`;
