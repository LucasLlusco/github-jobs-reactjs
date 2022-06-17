import React from 'react'
import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 90%;
    margin: auto;
    color: ${({theme}) => theme.colors.lightGray};
    padding: 18px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    a {
      text-decoration: underline;
      color: ${({theme}) => theme.colors.lightGray};
      font-weight: 700;
    }
`

const Footer = () => {
  return (
    <FooterContainer>
        <p>created by <a href="https://github.com/LucasLlusco">lucas-llusco</a> - <a href="https://devchallenges.io/">devChallenges.io</a></p>
    </FooterContainer>
  )
}

export default Footer