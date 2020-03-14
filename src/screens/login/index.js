import React from 'react'
import styled from 'styled-components'

import Logo from '../../components/logo'
import LoginForm from '../../components/login'

const Login = props => {
  return (
    <LoginContainer>
      <Logo />
      <LoginForm history={props.history} />
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: white;
`

export default Login
