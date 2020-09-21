import React from 'react';
import styled from 'styled-components'

import CoverPage from './../CoverPage'
import About from './../About'
import Projects from './../Projects'
import Abilities from './../Abilities'
import ItsOnYou from './../ItsOnYou'
import Contact from './../Contact'
import Footer from './../Footer'

const Main = styled.main`
  position: relative;
  top: 3em;

  @media(min-width:1023px) {
    top: 0;
  }
`

const Home = () => {
  return (
    <>
      <Main>
        <CoverPage />
        <About />
        <Projects />
        <Abilities />
        <ItsOnYou />
        <Contact />
      </Main>
      <Footer />
    </>
  );
}

export default Home;
