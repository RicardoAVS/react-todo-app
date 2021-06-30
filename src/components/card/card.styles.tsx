import styled from 'styled-components';

export const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid #F6F6F6;

    hr {
      width: 94%;
      border: 1px solid #F6F6F6;
      }

    .icon {
        position: relative;
        background: #3fa5fa;
        padding: 0.7rem;
        border-radius: 5px;
        width: 3.5rem;
        height: 2.8rem;
        top: -28px;
        right: -2px;
        color: white;
        }
}
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
`;

export const CardTop = styled.div`
    width: 28%;
    display: flex;
    justify-content: space-around;
}
`;
