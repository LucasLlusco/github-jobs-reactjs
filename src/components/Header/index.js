import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"; 

const HeaderContainer = styled.header`
    width: 90%;
    margin: auto;
    padding: 32px 0px;
    a {
      color: ${({theme}) => theme.colors.darkBlue2};
    }
    h1 {
      font-size: 1.5rem;
      font-weight: 700;
    }
    span {
      font-weight: initial;
    }

`

const Header = () => {
  return (
    <HeaderContainer>
        <h1><Link to={"/"}><b>Github</b> <span>Jobs</span></Link></h1>
    </HeaderContainer>
  )
}

export default Header