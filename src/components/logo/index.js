import React from 'react'

import styled from 'styled-components'

import logo from '../../assets/img/logo.svg'

const Logo = () => {
  return <LogoComp></LogoComp>
}

const LogoComp = styled.div`
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 90vw;
  height: 15vh;
`

export default Logo
