import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: auto;
  text-align: center;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  a {
    font-size: 1.125rem;
    color: ${({theme}) => theme.colors.blue};
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 10px;      
  }
`

const NotFound = () => {
  return (
    <Container>
      <div>
        <p>There's nothing here!</p>
        <Link to={"/"}><FontAwesomeIcon icon={faLeftLong}/> Go to home</Link>
      </div>
    </Container>
  )
}

export default NotFound