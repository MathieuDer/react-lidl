import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Navigation = () => {
  return (
    <nav>
      <NavLinks>
        <LinkItem>
          <RouterLink to='/products'>Accueil</RouterLink>
        </LinkItem>

        <LinkItem>
          <RouterLink to='/products'>Produits</RouterLink>
        </LinkItem>

        <LinkItem>
          <RouterLink to=''>Marché</RouterLink>
        </LinkItem>

        <LinkItem>
          <RouterLink to=''>Recettes</RouterLink>
        </LinkItem>

        <LinkItem>
          <RouterLink to=''>Le blog</RouterLink>
        </LinkItem>

        <LinkItem>
          <RouterLink to=''>Voyages</RouterLink>
        </LinkItem>

        <LinkItem>
          <RouterLink to=''>Boutique de vin</RouterLink>
        </LinkItem>
      </NavLinks>
    </nav>
  )
}

const NavLinks = styled.ul`
  padding: 18px;
`
const LinkItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 0px;
  border-top: 1px solid #e3e4e5;
`
const RouterLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: black;
`

export default Navigation
