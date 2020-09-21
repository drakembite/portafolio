import React, { useState } from 'react';
import styled from 'styled-components'

import Wrapper from './assets/Wrapper'
import Title from './assets/Title'
import CardProjects from './assets/CardProject'

const ListProjects = [
  {
    id: 1,
    title: 'Fangel Inc. (2019)',
    subtitle: 'React JS / Firestore',
    description: 'Startup en desarrollo, una nueva red social y marketplace a al ves.',
    image: require('./images/fangel.png'),
    shadow: true,
    alt: 'Foto de la landing page de Fangel'
  }, {
    id: 2,
    title: 'Cruz de Motupe (2020)',
    subtitle: 'React JS / Firestore',
    description: 'Pagina web construida para la Hermandad de la Cruz de motupe, con la finalidad de comunicar sobre todas sus actividad y tambien recibir donaciones.',
    image: require('./images/motupe.png'),
    shadow: true,
    alt: 'Foto de la landing page de web de la Hermandad de Cruz de Motupe'
  }, {
    id: 3,
    title: 'Pynade (2020)',
    subtitle: 'React JS',
    description: 'Enpresa dedicada a al publicidad en redes sociales y marketing de contenidos para negocios locales en Perú.',
    image: require('./images/pynade.png'),
    shadow: true,
    alt: 'Foto de la landing page de web de Pynade - Digital Agency'
  }, {
    id: 4,
    title: 'Goodly (2020)',
    subtitle: 'React Native',
    description: 'Aplicacion movil en desarrollo, ubicada en el rubro de salud y bienestar. Aún no puedo describir detalles de ella.',
    image: require('./images/goodly.png'),
    shadow: false,
    alt: 'Foto de la landing page de web de Goodly'
  }, {
    id: 5,
    title: 'Binn (2020)',
    subtitle: 'React Native',
    description: 'Aplicacion movil en desarrollo. Una forma novedosa y segura de realizar viajes al rededor del mundo.',
    image: require('./images/biin.png'),
    shadow: true,
    alt: 'Foto de la landing page de web de Binn'
  },
]

const Section = styled.section`
  background: ${props => props.theme.blackColor};
  padding-bottom: 1px;
`

const Projects = () => {
  const [projects, setProjects] = useState(ListProjects);

  return (
    <Section id="projects">
      <Wrapper>
        <Title title="Proyectos" color={props => props.theme.whiteColor} />
        <ul>
          {
            projects.map((project) => <CardProjects key={project.id} {...project} />)
          }
        </ul>
      </Wrapper>
    </Section>
  );
}

export default Projects;
