import React from 'react';
import styled from 'styled-components'

import fonts from './../../styles/Fonts'

const ButtonStyled = styled.button`
  font-family: ${fonts.secondaryFonts};
  font-weight: ${fonts.weight.regular};
  border-radius: 2px;
  background: ${props => props.background};
  color: ${props => props.color};
  text-transform: uppercase;
  border: none;
  padding: ${props => props.padding};
  display: ${props => props.center ? 'block' : 'initial'};
  margin: ${props => props.center ? 'auto' : '0'};
  width: auto;
  height: auto;
  font-size: .82em;
  cursor: pointer;
  transition: all .4s ease-in-out;

  &:hover,
  &:active {
    background: ${props => props.theme.blackColor};
    color: ${props => props.theme.whiteColor};
  }

  @media(min-width:767px) {
    padding: 0;
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
  }

  @media(min-width:1023px) {
    font-size: .8em;
  }

  @media(min-width:1200px) {
    font-size: .56em;
    margin: initial;
  }
`

const Button = ({ content, background, color, padding, center,width, height }) => (
  <ButtonStyled
    background={background}
    color={color}
    padding={padding}
    center={center}
    width={width}
    height={height}
  >
    {content}
  </ButtonStyled>
)

export default Button;
