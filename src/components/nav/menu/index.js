import React from 'react'
import PropTypes from 'prop-types'

import Navigation from '../navigation'
import NavigationFooter from '../footer'

import styled from 'styled-components'
import { motion } from 'framer-motion'

const MenuComponent = ({ display }) => {
  return (
    <Menu animate={display} variants={menuVariants}>
      <NavTitle>menu</NavTitle>

      <Navigation />
      <NavigationFooter />
    </Menu>
  )
}
MenuComponent.propTypes = {
  display: PropTypes.string.isRequired
}

const Menu = styled(motion.div)`
  position: absolute;
  top: 60;
  width: 100vw;
  height: calc(100vh - 60px);
  border-top: 5px solid #e3e4e5;
  background-color: #fff;
`

const menuVariants = {
  // open: { opacity: 1, x: 0 },
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 0px 0px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  // closed: { opacity: 0, x: '-100%' }
  closed: {
    clipPath: 'circle(0px at 0px 0px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const NavTitle = styled.header`
  text-transform: uppercase;
  font-weight: 900;
  padding: 18px 12px 0px 18px;
`

export default MenuComponent
