import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`

    h2 {
        color: var(--titles-primary);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        height: 4rem;

        padding: 0 1.5rem;

        border: 0;
        border-radius: 0.25rem;

        background: var(--background-tertiary);
        color: var(--titles-primary);

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--titles-primary);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    .save-transaction {
        width: 100%;
        height: 4rem;

        padding: 0 1.5rem;

        background: var(--green);
        color: var(--white);

        border: 0;
        border-radius: 0.25rem;

        font-size: 1rem;
        margin-top: 1.5rem;

        transition: all 0.2s;

        &:hover {
            filter: brightness(0.6);
        }
    }
`;

export const TransactionTypeContainer = styled.div`

    margin: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33dd95',
    red: '#e52e40'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
        
    border: 1px solid var(--background-tertiary);
    border-radius: 0.25rem;

    background: ${(props) => props.isActive 
    ? transparentize(0.5, colors[props.activeColor])
    : '#29292E' };

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    &:hover {
        cursor: pointer;
        filter: brightness(0.6);
    }

    img {
        width: 24px;
        height: 24px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--white);
    }
`;