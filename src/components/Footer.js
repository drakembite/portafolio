import React from 'react';
import styled from 'styled-components'

import fonts from './../styles/Fonts'

const FooterStyled = styled.footer`
  background: #E9E9E9;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;

  @media(min-width:767px) {
    bottom: -30px;
  }
}

  p {
    font-family: ${fonts.secondaryFonts};
    font-size: .8rem;
    letter-spacing: .02em;
    padding: 1.2em 1em;
    text-align: center;
  }
`

const Footer = () => {
  return (
    <FooterStyled>
      <p>Todos los derechos reservados © 2020</p>
    </FooterStyled>
  );
}

export default Footer;
