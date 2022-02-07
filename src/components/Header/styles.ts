import styled from "styled-components";

export const Container = styled.header`
    background: linear-gradient(90deg, #202024 0%, #00291D 100%);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 3rem 1rem 12rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        padding: 0.5rem 2rem;

        background: var(--green);
        color: var(--white);

        border: 0;
        border-radius: 8px;

        transition: all 0.2s;

        &:hover {
            filter: brightness(0.6);
        }
    }
`;