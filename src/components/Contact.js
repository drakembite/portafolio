import React from 'react';
import styled, { css } from 'styled-components'
import { useForm } from 'react-hook-form'

import Wrapper from './assets/Wrapper'
import Title from './assets/Title'
import Text from './assets/Text'
import Button from './assets/Button'
import FacebookIcon from './images/facebook.svg'

import fonts from './../styles/Fonts'

const InputMixin = css`
  border: 1px solid ${props => props.theme.greyColor};
  border-radius: 4px;
  background: '#F1F2F2';
  padding: .8em .6em;
  font-family: ${fonts.secondaryFonts};
  font-size: .95em;
  letter-spacing: .01em;
  margin-top: .5em;

  @media(min-width:1200px) {
    padding: .6em .4em;
    font-size: .75em;
    width: 50%;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`

const Input = styled.input`
  ${InputMixin}
`

const TextArea = styled.textarea`
  ${InputMixin}
  height: 120px;
  resize: none;
  font-family: ${fonts.secondaryFonts};
`

const Advertising = styled.small`
  color: ${props => props.theme.redColor};
  margin: ${props => props.margin || '4px 0 0 0'};

  @media(min-width:1200px) {
    font-size: .65em;
  }
`

const SocialMedia = styled.div`
  margin-bottom: 5em;

  img {
    margin-top: .8em;
    width: 2.6em;
  }

  @media(min-width:1200px) {
    margin-bottom: 1.4em;
  }
`

const Contact = () => {
  const {register, errors, handleSubmit} = useForm()

  const onSubmit = (data, e) => {
    e.target.reset()
  }

  return (
    <section id="contact">
      <Wrapper>
        <Title
          title="¿Creamos algo juntos?"
          color={props => props.theme.blackColor}
        />
        <Text
          text="Envíame un correo electrónico."
          color={props => props.theme.blackColor}
          marginTop="-.6em"
        />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input type="email" name="email" placeholder="Correo electrónico" ref={
            register({
              required: {
                value: true,
                message: '* Porfavor ingrese su correo electrónico'
              },
              pattern: /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })
          } />
          <Advertising>{errors?.email?.message} </Advertising>
          <TextArea type="text" name="message" placeholder="Texto..." ref={
            register({
              required: {value: true, message: '* Porfavor escriba un texto'},
              minLenght: {value: 10, message: 'El texto debe tener mas de 10 caracteres'},
              maxLenght: 500
            })
          } />
          <Advertising margin="4px 0 .8em 0">{errors?.message?.message} </Advertising>
          <Button
            type="submit"
            content="enviar"
            background={props => props.theme.brandColor}
            color={props => props.theme.whiteColor}
            padding="1em 2.8em"
            center="true"
            width="10em"
            height="3.2em"
          />
        </Form>
        <SocialMedia>
          <Text
            text="O encuentrame en"
            color={props => props.theme.blackColor}
            marginTop="2em"
          />
          <img src={FacebookIcon} alt="Imagen del icono de facebook:"></img>
        </SocialMedia>
      </Wrapper>
    </section>
  );
}

export default Contact;
