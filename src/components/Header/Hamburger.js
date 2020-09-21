import React, { useState } from 'react';
import styled from 'styled-components'
import Navbar from './Navbar'

const Burger = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  position: fixed;
  top: 0.625em;
  right: .9em;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 100;

  @media(min-width:1023px) {
    display: none;
  }

  span {
    width: auto;
    height: 0.14rem;
    background: ${props => props.theme.blackColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    border-radius: .5em;
  }
`

const Hamburger = () => {
  const [open, setOpen] = useState(false)

  const closeNavbar = () => {
    setOpen(false)
  }

  return (
    <>  
      <Burger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Burger>
      <Navbar open={open} closeNavbar={() => closeNavbar()} />
    </>
  );
}

export default Hamburger;