import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
        --background-primary: rgb(18, 18, 20);
        --background-secondary: #202024;
        --background-tertiary: #29292E;

        --text-primary: #363f5f;
        --text-secondary: #969cb3;

        --titles-primary: rgb(168, 168, 179);
        --titles-secondary: #C4C4CC

        --divider: #505059;

        --white: #fff;
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --green: #33CC95;

        --purple-rocket: #8257e6;
        --green-rocket: #00875F;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media(max-width: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background: var(--background-primary);
        color: var(--text-primary);
        -webkit-font-smoothing: antialiased;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
    }
    
    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.7;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;;
        max-width: 576px;

        background: var(--background-secondary);

        padding: 3rem;
        position: relative;

        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 3.5rem;
        top: 3.6rem;

        border: 0;
        background: transparent;

        transition: all 0.2s;

        &:hover {
            cursor: pointer;
            filter: brightness(0.6);
        }
    }
`;

