import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({theme}) => theme.colors.bgGray};
        color: ${({theme}) => theme.colors.darkBlue};
        
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
    button {
        padding: 0px 10px;
        height: 45px;
        border: none;
        border-radius: 3px;
        font-weight: bold;
        font-size: 0.875rem;
        cursor: pointer;
        transition: .1s ease all;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
    }
    a {
        text-decoration: none;
        color: initial;
    }
    li {
        list-style: none;
    }    
    input {
        border: none;
        outline: none;
        height: 45px;
        transition: .1s ease all;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
    }

    .paginationBtns {
        display: flex;
        gap: 12px;
        align-self: flex-end;
        flex-wrap: wrap;
        li {
            padding: 8px 12px;
            border: 1px solid #B7BCCE;
            transition: .1s ease all;
            border-radius: 4px;
            line-height: 14.06px;
            a {
                color: ${({theme}) => theme.colors.lightGray};
                font-size: 0.75rem;
                cursor: pointer;
            }
            &:hover {
                border-color: ${({theme}) => theme.colors.blue};
                a {
                    color: ${({theme}) => theme.colors.blue};
                }
            }
        }
    }
    .paginationBreak {
        border: 1px solid transparent !important;
    }
    .paginationActive {
        background-color: ${({theme}) => theme.colors.blue}; 
        border-color: ${({theme}) => theme.colors.blue} !important;
        a {
            color: ${({theme}) => theme.colors.white} !important;           
        }
    }

`;