import styled from "styled-components";

export const Container = styled.main`
    width: 90%;
    margin: auto;
`
export const JobsSectionWrapper = styled.section` 
    display: flex;
    gap: 32px;
    padding: 45px 0px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
export const NoResults = styled.p`
    flex: 75%;
    text-align: center;
`



