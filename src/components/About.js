import React from 'react';
import styled from 'styled-components'

import Wrapper from './assets/Wrapper'
import Title from './assets/Title'
import Text from './assets/Text'

import fonts from './../styles/Fonts'
import DeveloperImage from './images/web_development_.svg'

const Subtitle = styled.h3`
  font-weight: ${fonts.weight.light};
  font-size: 1.2em;
  margin: -.6em 0 1.5em 0;
`

const Image = styled.img`
  margin: 2.2em 2em 3em 2.5em;

  @media(min-width:767px) {
    margin: 2.5em 4em 3.4em 4em;
  }

  @media(min-width:1200px) {
    margin: 4.5em 0 3em 4.5em;
  }
`

const Grid = styled.div`
  display: block;

  @media(min-width:1200px) {
    display: grid;
    grid-template-columns: 55% 45%;
    height: 100vh;
    align-items: center;
  }
`

const About = () => {
  return (
    <section id="about">
      <Wrapper>
        <Grid>
          <div>
            <Title title="Hola, soy Nelson" color={props => props.theme.blackColor} padding="0 0 .8em 0" />
            <Subtitle>Desarrollador Web</Subtitle>
            <Text
              text="Soy una persona apasionada por la tecnología y las ciencias humanisticas y empresariales.
                    Me enfoco en brindar experiencias unicas y significativas a los usuarios de los trabajos que realizo."
              color={props => props.theme.blackColor}
              marginTop="0"
            />
            <Text
              text="Con un enfoque a un futuro proximo, realizo actividades que beneficiaran a gran parte de la población mundial."
              color={props => props.theme.blackColor}
              marginTop="12px"
            />
          </div>
          <Image src={DeveloperImage} alr="Imagen de un desarrollador web"></Image>
        </Grid>
      </Wrapper>
    </section>
  );
}

export default About;
