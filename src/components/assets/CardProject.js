import React from 'react';
import styled from 'styled-components'

import Text from './Text'

import fonts from './../../styles/Fonts'

const Article = styled.article`
  background: ${props =>props.theme.whiteColor};
  padding: 1.5em;
  margin-bottom: 3em;

  h3 {
    font-size: 1.6em;
    margin-bottom: .4em;
    font-weight: ${fonts.weight.semiMedium};
  }

  h4 {
    font-size: .8em;
    margin-bottom: 1.1em;
    font-weight: ${fonts.weight.semiMedium};
  }
`

const Image = styled.img`
  width: 100%;
  margin-top: 1.8em;
  border-radius: 8px;
  box-shadow: ${props => props.shadow ? '0px 0px 8px 2px rgba(0, 0, 0, 0.1)' : 'none'};

  @media(min-width:1200px) {
    width: 50%;
    margin: 1.4em auto 0 auto;
  }

  @media(min-width:1440px) {
    width: 90%;
    margin: 0 auto 0 auto;
  }

  @media(min-width:1023px) {
    h3 {
    font-size: 1.55em;
    }
  }
`

const Grid = styled.div`
  display: block;

  @media(min-width:1440px) {
    display: grid;
    grid-template-columns: 55% 45%;
  }
`

const CardProject = ({ title, subtitle, description, image, shadow, alt }) => {
  return (
    <li>
      <Article>
        <Grid>
          <div>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <Text
              text={description}
              color={props => props.theme.blackColor}
              marginTop="0"
            />
          </div>
          <Image shadow={shadow} src={image} alt={alt} />
        </Grid>
      </Article>
    </li>
  );
}

export default CardProject;
