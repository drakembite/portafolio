import React from 'react';
import styled from 'styled-components'

const TitleStyled = styled.h2`
  font-size: 1.85em;
  color: ${props =>props.color};
  padding: 1.4em 0 .8em 0;

  @media(min-width:1200px) {
    padding: ${props => props.padding || '1.6em 0 .8em 0'}
  }
`

const Title = ({ title, color, padding }) => (
  <TitleStyled color={color} padding={padding}>
    {title}
  </TitleStyled>
)

export default Title;
