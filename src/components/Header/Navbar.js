import React from 'react';
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link';

import fonts from './../../styles/Fonts'

const Layout = styled.nav`
  display: ${({ open }) => open ? 'block' : 'none'};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${({ open }) => open ? 'rgba(0,0,0,.8)' : 'transparent'};
  transition: all .3s;

  @media(min-width:1023px) {
    display: block;
    position: relative;
    z-index: 400;
    width: auto;
    height: auto;
    position: absolute;
  }
`

const NavList = styled.ul`
  flex-flow: column nowrap;
  background-color: ${props => props.theme.whiteColor};
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
  padding-top: .6em;
  transition: transform 0.3s ease-in-out;
  z-index: 200;

  @media(min-width:1023px) {
    position: absolute;
    background-color: transparent;
    transform: translateX(0);
    width: auto;
    height: auto;
    padding-top: 0;
    right: 2.5em;
  }

  li {
    &:hover, &:active {
      background: rgba(30,28,29,.2);
    }

    @media(min-width:1023px) {
      padding: 20px 0;
      margin-top: -18px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      transition: all .4s ease-in-out;
    }

    &:hover, &:active {
      background: rgba(30,28,29,.8);
    }
  }


  a {
    color: ${props => props.theme.blackColor};
    font-family: ${fonts.secondaryFonts};
    display: block;
    width: 100%;
    height: 2.8em;
    display: flex;
    align-items: center;
    padding-left: 1.250em;
    font-size: 1em;
    transition: all .4s;

    @media(min-width:1023px) {
      font-size: .6em;
      text-transform: uppercase;
      color: ${props => props.theme.whiteColor};
      display: block;
      width: 150px;
      height: auto;
      padding: 0;
      text-align: center;
    }

    &:hover, &:active {
      background: transparent;
      color: 
    }
  }

  @media(min-width:767px) {
    width: 40%;
  }

  @media(min-width:1023px) {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }
`


const Navbar = ({ open, closeNavbar }) => {
  return (
    <Layout open={open}  onClick={closeNavbar}>
      <NavList open={open}>
        <li>
          <Link to="/#about">Acerca de mi</Link>
        </li>
        <li>
          <Link to="/#projects">Proyectos</Link>
        </li>
        <li>
          <Link to="/#abilities">Habilidades</Link>
        </li>
        <li>
          <Link to="/#contact">Contacto</Link>
        </li>
      </NavList>
    </Layout>
  );
}

export default Navbar;
