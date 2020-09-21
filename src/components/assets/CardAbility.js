import React from 'react';
import styled, { keyframes } from 'styled-components'

import fonts from './../../styles/Fonts'

const shadowDropLeft = keyframes`
  from {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  to {
    box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.55);
  }
`

const shadowDropBottom = keyframes`
  from {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  to {
    box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.55);
  }
` 

const shadowDropRight = keyframes`
  from {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  to {
    box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.55);
  }
`

const max = keyframes`
  0% {
    height: initial;
  }
  50% {
    height: 34%;
  }
  100% {
    height: 100%;
  }
`

const center = keyframes`
  0% {
    background: transparent;
    transform: translateY(0);
  }
  100% {
    background: transparent;
    transform: translateY(230%);
  }
`

const List = styled.li`
  @media(min-width:1200px) {
    margin-bottom: 3em;
    
    &:nth-child(1):hover {
      animation: ${shadowDropLeft} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
    }

    &:nth-child(2):hover {
      animation: ${shadowDropBottom} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    &:nth-child(3):hover {
      animation: ${shadowDropRight} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
  }
`

const Article = styled.article`
  color: ${props =>props.theme.whiteColor};
  background-image: url(${props => props.image});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 65vh;
  position: relative;
  margin-bottom: 3em;
  background-size: cover;
  background-position-x: -8em;

  @media(min-width:374px) {
    background-position-x: -11.2em;
  }

  @media(min-width:1200px) {
    height: 78vh;
    margin-bottom: 0;

    &:hover div {
      background: rgba(20, 8, 14, .92);
      animation: ${max} 1s ease both
    }

    &:hover div div {
      animation: ${center} .4s ease .6s both;
    }
  }
`

const Container = styled.div`
  background: ${props => props.theme.transparentBlack};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.6em .8em;

  h3 {
    text-align: center;
    margin-bottom: .8em;
    font-size: 1.25em;
  }

  p {
    text-align: center;
    font-weight: ${fonts.weight.light};
    font-size: .9em;
    line-height: 1.4em;
    font-family: ${props => props.theme.secondaryFonts};
  }

  @media(min-width:1200px) {
    padding: 1.6em .5em;
    transition: all .4s;

    h3 {
      font-size: .84em;
    }

    p {
      font-size: .58em;
    }
  }
`

const CardAbility = ({ title, description, image}) => {
  return (
    <List>
      <Article image={image}>
        <Container>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Container>
      </Article>
    </List>
  );
}

export default CardAbility;
