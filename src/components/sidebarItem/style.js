import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    color: white;
    padding: 20px;
    cursor: pointer;
    //border-radius: ;

    svg > {
        margin: 0 20px;
    }

    &:hover {
        background-color: black;
    }
`;