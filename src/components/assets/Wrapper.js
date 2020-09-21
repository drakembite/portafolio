import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  width: 92%;
  height: ${props => props.height || "auto"};
  margin: 0 auto;

  @media(min-width:767px) {
    width: 100%;
    padding: 0 5%;
  }

  @media(min-width:1023px) {
    width: 100%;
    padding: 0 14%;
    display: ${props => props.flex ? 'flex' : 'block'};
    position: relative;
  }

  @media(min-width:1200px) {
    padding: 0;
    width: 100%;
    max-width: 1100px;
  }

  @media(min-width:1440px) {
    width: 100%;
    max-width: 1200px;
  }
`

const Wrapper = (props) => (
  <Container height={props.height} flex={props.flex}>
     {props.children}
  </Container>
)

export default Wrapper;
