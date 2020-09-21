import React from 'react';
import styled from 'styled-components'

import fonts from './../../styles/Fonts'

const TextStyled = styled.p`
  color: ${props => props.color};
  font-family: ${fonts.secondaryFonts};
  font-weight: ${fonts.weight.light};
  font-size: 1.08em;
  line-height: 1.4em;
  margin-top: ${props => props.marginTop};

  @media(min-width:1200px) {
    font-size: .8em;
  }
`

const Text = ({ text, color, marginTop}) => (
    <TextStyled color={color} marginTop={marginTop}>
      {text}
    </TextStyled>
)

export default Text;
