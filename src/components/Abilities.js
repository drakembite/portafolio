import React, { useState } from 'react';
import styled from 'styled-components'

import CardAbility from './assets/CardAbility'
import Wrapper from './assets/Wrapper'
import Title from './assets/Title'

const ListAbilities = [
  {
    id: 1,
    title: 'Arquitectura Frontend',
    description: 'Aplicaciones web escalables y optimas construidas con React JS',
    image: require('./images/frontend.jpg')
  }, {
    id: 2,
    title: 'Diseño UI & UX',
    description: 'Conocimiento del comportamiento humano y diseño centrado en el usuario',
    image: require('./images/desing.jpg')
  }, {
    id: 3,
    title: 'Marketing Digital',
    description: 'Aplicación de sesgos psicológicos basados en las conecciones emocionales',
    image: require('./images/marketing.jpg')
  },
]

const List = styled.ul`
  display: block;
  
  @media(min-width:1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    gap: 2em;
  }
`

const Abilities = () => {
  const [abilities, setSAbilities] = useState(ListAbilities);

  return (
    <section id="abilities">
      <Wrapper>
        <Title title="Habilidades" color={props => props.theme.blackColor} />
        <List>
          {
            abilities.map((ability) => <CardAbility key={ability.id} {...ability} />)
          }
        </List>
      </Wrapper>
    </section>
  );
}

export default Abilities;
