import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 20px;

    > svg {
        margin: 0 20px;
    }

    &:hover {
        background-color: black;
        transition-duration: 0.3s;
    }
`;