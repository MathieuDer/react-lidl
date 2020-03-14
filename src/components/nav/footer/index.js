import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const NavigationFooter = () => {
  return (
    <nav>
      <NavFooterContainer>
        <NavLinks>
          <LinkItem>
            <RouterLink to=''>Emploi</RouterLink>
          </LinkItem>

          <LinkItem>
            <RouterLink to='/products'>Immobilier</RouterLink>
          </LinkItem>

          <LinkItem>
            <RouterLink to=''>Facture en ligne</RouterLink>
          </LinkItem>

          <LinkItem>
            <RouterLink to=''>Découvrir Lidl</RouterLink>
          </LinkItem>

          <LinkItem>
            <RouterLink to=''>Information client</RouterLink>
          </LinkItem>
        </NavLinks>
      </NavFooterContainer>
    </nav>
  )
}

const NavFooterContainer = styled.div`
  background-color: #4e5761;
  position: absolute;
  bottom: 0;
  width: 100vw;
`

const NavLinks = styled.ul`
  padding: 18px;
`
const LinkItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
`
const RouterLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.9375rem;
  color: white;
`

export default NavigationFooter
