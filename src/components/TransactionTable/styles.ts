import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-secondary);
            font-weight: 400;

            padding: 1rem 2rem;

            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;

            background: var(--background-secondary);
            color: var(--text-secondary);

            &:first-child {
                color: var(--white);
                border-radius: 0.5rem 0 0 0.5rem;
            }

            &:last-child {
                border-radius: 0 0.5rem 0.5rem 0;
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }
    }
`;