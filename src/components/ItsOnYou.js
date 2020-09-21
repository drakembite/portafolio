import React from 'react';
import styled from 'styled-components'

import Wrapper from './assets/Wrapper'
import Title from './assets/Title'
import ImageWork from './images/team_work.svg'
import Text from './assets/Text'

const Section = styled.section`
  background: ${props => props.theme.blackColor};
  padding-bottom: 1px;
`

const Image = styled.img`
  margin: 3em 2em 3em 2.5em;

  @media(min-width:767px) {
    margin: 3.2em 4.8em 3.4em 4.8em;
  }

  @media(min-width:1200px) {
    margin: 4.5em 0 4.5em 4.5em
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

const ItsOnYou = () => {
  return (
    <Section>
       <Wrapper>
         <Grid>
          <div>
            <Title title="Al final," color={props => props.theme.whiteColor} padding="0 0 .8em 0" />
            <Text
              text="Esta en ti buscar trabajar con personas confiables y con pasión en lo que hacen."
              color={props => props.theme.whiteColor}
              marginTop="-.8em"
            />
          </div>
          <Image src={ImageWork} alt="Imagen de un grupo de trabajo" />
         </Grid>
       </Wrapper>
    </Section>
  );
}

export default ItsOnYou;
