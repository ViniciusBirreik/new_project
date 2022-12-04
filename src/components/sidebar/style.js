import styled from "styled-components";

export const Container = styled.div`
    background-color: #171923;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: ShowSIdebar .4s;

    svg > {
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        position: fixed;
        color: white;
        cursor: pointer;
    }

    @keyframes ShowSIdebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 300px;
        }
    }
`;

export const Content = styled.div`
    margin-top: 100px;
`;