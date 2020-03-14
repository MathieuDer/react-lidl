import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Axios from 'axios'

const LoginForm = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  /*const [formError, setFormError] = useState({
    isError: false,
    errorMessage: ''
  })*/

  const sendForm = async e => {
    e.preventDefault()
    const { headers } = await Axios.post(
      'https://easy-login-api.herokuapp.com/users/login',
      {
        username,
        password
      }
    )

    const token = headers['x-access-token']

    if (token) {
      localStorage.setItem('token', token)
      props.history.push('products')
    }
  }

  return (
    <FormContainer>
      <FormStyled>
        <LoginFormTitle>Connexion</LoginFormTitle>
        <StyledInput
          type='email'
          placeholder='Email'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <StyledInput
          type='password'
          placeholder='Mot de passe'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <StyledButton onClick={sendForm}>Envoyer</StyledButton>
      </FormStyled>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  margin-top: 10vh;
  border-radius: 5px;
  width: 85vw;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px 0px;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: center;
  padding: 8vw;
`
const StyledInput = styled.input`
  flex: 0 1 100%;
  font-size: 1.1rem;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #f1f2f3;
  color: #565b61;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 5px -1px,
    rgba(0, 0, 0, 0.03) 0px 5px 8px 0px;
`

const StyledButton = styled.button`
  flex: 0 1 50%;
  border-radius: 4px;
  border: none;
  padding: 10px;
  color: white;
  font-size: 1.1rem;
  background-color: #0050aa;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 5px -1px,
    rgba(0, 0, 0, 0.03) 0px 5px 8px 0px;
`

const LoginFormTitle = styled.h2`
  text-align: center;
  color: #565b61;
  margin-bottom: 5vh;
`

LoginForm.propTypes = {
  submit: PropTypes.func
}

export default LoginForm
