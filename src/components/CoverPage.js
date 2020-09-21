import React from 'react';
import styled, { keyframes } from 'styled-components'

import Wrapper from './assets/Wrapper'
import Button from './assets/Button'
import CoverPageImage from './images/portada.png'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Container = styled.div`
  background-image: url(${CoverPageImage});
  width: 100%;
  height: calc(100vh - 3em);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: -7em;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  @media(min-width:767px) {
    background-position-x: 0;
  }

  @media(min-width:1023px) {
    height: 100vh;
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 1.85em;
  color: ${props => props.theme.whiteColor};
  line-height: 1.55em;
  margin: 0 5%;
  text-align: center;
  margin-bottom: 2em;

  @media(min-width:767px) {
    margin: 0 3.5% 2em 3.5%;
  }

  @media(min-width:1200px) {
    margin: 0 6em 1.7em 0;
    text-align: left;
  }
`

const CoverPage = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>
            Despega hacia un mundo digital junto a mi
          </Title>
          <Button
            typeStyle="primary"
            content="trabajemos juntos"
            background={props => props.theme.whiteColor}
            color={props => props.theme.blackColor}
            padding="1em 2.3em"
            center="true"
            width="17.5em"
            height="3.6em"
          />
        </Wrapper>
      </Container>
    </>
  );
}

export default CoverPage;
