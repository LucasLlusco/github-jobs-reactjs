import styled from "styled-components";

export const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 25%;  
    height: fit-content;
    p {
        color: ${({theme}) => theme.colors.lightGray};
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.875rem;
    }
`
export const FilterItem = styled.div` 
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: 12px;
    input {
        height: 18px;
        width: 18px;
        border-radius: 2px;
    }
    label {
        font-size: 0.875rem;        
    }
`
export const LocationInput = styled.div` 
    width: initial;
    flex-grow: 1;
    margin: 0;
    padding: 0px 10px 0px 0px;    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);
    svg {
        margin-left: 12px;
        color: ${({theme}) => theme.colors.lightGray};
    }
    input {
        flex-grow: 1; 
        text-overflow: ellipsis; 
        font-size: 0.75rem;  
        color: ${({theme}) => theme.colors.lightGray};
        &::placeholder {
            color: ${({theme}) => theme.colors.lightGray};
        }
    }
`