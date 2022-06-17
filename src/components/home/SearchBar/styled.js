import styled from "styled-components";

export const SearchBg = styled.div`
    background-image: url('/assets/images/backgroundImg.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    padding: 40px 0px;
    border-radius: 8px;
    
`
export const SearchBarWrapper = styled.div`
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    gap: 10px;
    margin: auto;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%); 
    @media screen and (max-width: 576px) {
        width: 90%;
    }
    svg {
        margin-left: 12px;
        color: ${({theme}) => theme.colors.lightGray};
        @media screen and (max-width: 576px) {
            margin-left: 0;
        }
    }
    input {
        flex-grow: 1; 
        text-overflow: ellipsis; 
        font-size: 0.75rem;  
        color: ${({theme}) => theme.colors.lightGray};
        &::placeholder {
            color: ${({theme}) => theme.colors.lightGray};
        }
        @media screen and (max-width: 576px) {
            font-size: 0.688rem;
        }
    }
    button {
        width: 146px;
        font-size: 1rem;
        font-weight: 500;
        background-color: ${({theme}) => theme.colors.blue};
        color: ${({theme}) => theme.colors.white};
        @media screen and (max-width: 576px) {
            font-size: 0.875rem;
            width: 104px;
        }
    }
`