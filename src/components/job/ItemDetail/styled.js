import styled from "styled-components";

export const JobWrapper = styled.section`
    display: flex;
    gap: 32px;
    padding: 0px 0px 45px 0px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
export const JobAside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 25%; 
`
export const AsideLinkBack = styled.div`
    font-size: 0.875rem;
    font-weight: 500;
    a {
        color: ${({theme}) => theme.colors.blue};
    } 
    svg {
        margin-right: 8px;        
    }
`
export const AsideTitle = styled.h3`
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.lightGray};
`
export const AsideContent = styled.div`
    font-weight: 500;
    a {
        color: ${({theme}) => theme.colors.blue};
        overflow-wrap: anywhere;
    }
`
export const JobInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    flex: 75%; 
`
export const JobPosition = styled.div`
    h2 {
        font-weight: 700;
        font-size: 1.5rem;
    }
    div {
        display: flex;
        gap: 25px;
        margin-bottom: 10px;
        flex-wrap: wrap;
        @media screen and (max-width: 768px) {
            flex-direction: column;
            gap: 10px;
        }
    }

`
export const JobCompany = styled.div`
    display: flex;
    gap: 12px;
    h3 {
        font-weight: 700;
        font-size: 1.125rem;
        margin-bottom: 10px;
    }

`
export const JobDescription = styled.div`
    a {
        font-weight: 500;
        color: ${({theme}) => theme.colors.blue};
    }

`