import React from 'react';
import styled from 'styled-components'
import Wrapper from './../assets/Wrapper'
import { Link } from 'react-router-dom'

import Hamburger from './Hamburger'

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 3em;
  z-index: 200;
  background: ${props => props.theme.whiteColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media(min-width:1023px) {
    background: transparent;
    box-shadow: none;
    position: absolute;
    right: 0;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.h1`
  color: ${props => props.theme.brandColor};
  font-size: 1em;

  @media(min-width:1023px) {
    display: none;
  }
  
  @media(min-width:1200px) {
    margin: 12px 0 0 0;
  }
`

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <Wrapper flex="true">
          <Link to="/">
            <Logo>Nelson Melgar</Logo>
          </Link>
          <Hamburger />
        </Wrapper>
      </HeaderContainer>
    </HeaderStyle>
  );
}

export default Header;
