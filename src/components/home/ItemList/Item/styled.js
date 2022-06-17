import styled from "styled-components";

export const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 12px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);
    transition: .1s ease all;
    &:hover {
        box-shadow:  0px 4px 8px rgb(0 0 0 / 15%);
    }
`
export const ItemImg = styled.div` 
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 500;
    font-size: 0.75rem;
    background-color: #F2F2F2;
    color: #BDBDBD;
`
export const ItemInfo = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 1; 
`
export const ItemCompany = styled.span` 
    font-weight: 700;
    font-size: 0.75rem;    
    color: ${({theme}) => theme.colors.darkBlue};
`
export const ItemTitle = styled.h3` 
    font-weight: 400;
    font-size: 1.125rem;
    overflow-wrap: anywhere; 
    color: ${({theme}) => theme.colors.darkBlue};
    @media screen and (max-width: 768px) {
        font-size: 0.875rem;
    }
`
export const ItemDetails = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px; 
    justify-content: space-between;
`
export const ItemType = styled.span` 
    font-weight: 700;
    font-size: 0.75rem;
    text-align: center;
    color: ${({theme}) => theme.colors.darkBlue};
    border: solid 1px ${({theme}) => theme.colors.darkBlue}; 
    border-radius: 4px;
    padding: 6px 8px;
    width: fit-content;
`
export const ItemLocationTimeWrapper = styled.div`
    display: flex;
    gap: 25px;
`
export const ItemLocationTime = styled.span`
    font-weight: 500;
    font-size: 0.75rem;
    color: ${({theme}) => theme.colors.lightGray};
    display: flex;
    gap: 7px;
    align-items: center;
`