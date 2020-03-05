import React, { useState, useEffect, Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import MenuComponent from '../MenuComponent'
import Modal from '../../common/Modal'

import styled from 'styled-components'
import {
  FiMenu,
  FiShoppingCart,
  FiMonitor,
  FiBookOpen,
  FiHome
} from 'react-icons/fi'

import logo from '../../../assets/img/logo.svg'

const HeaderComponent = () => {
  const location = useLocation()
  const defaultStates = {
    menu: 'closed',
    basket: false
  }

  const [menuState, setMenuState] = useState(defaultStates.menu)
  const [basketState, setBasketState] = useState(defaultStates.basket)

  useEffect(() => {
    const setDefaultStates = () => {
      setMenuState(defaultStates.menu)
      setBasketState(defaultStates.basket)
    }
    setDefaultStates()
  }, [location, defaultStates.basket, defaultStates.menu])

  return (
    <Fragment>
      <Header>
        <Brand />
        <BurgerIcon
          onClick={() => {
            setMenuState(menuState === 'open' ? 'closed' : 'open')
          }}
        />
        <HomeIcon />
        <BookIcon />
        <ShoppingBasketIcon onClick={() => setBasketState(!basketState)} />
        <MonitorIcon />
      </Header>
      <MenuComponent display={menuState} />
      <Modal
        display={basketState}
        width={`80vw`}
        title={`Mon panier`}
        onClose={() => setBasketState(!basketState)}
      >
        lorem...
      </Modal>
    </Fragment>
  )
}

const Header = styled.header`
  width: calc(100vw-12px);
  height: 60px;
  margin: 6px 0px 6px 0px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
`
const BurgerIcon = styled(FiMenu)`
  font-size: 2em;
  font-weight: 700;
`
const Brand = styled.span`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 12%;
  height: 40px;
`

const ShoppingBasketIcon = styled(FiShoppingCart)`
  font-size: 1.6em;
  font-weight: 400;
`

const MonitorIcon = styled(FiMonitor)`
  font-size: 1.6em;
  font-weight: 400;
`

const BookIcon = styled(FiBookOpen)`
  font-size: 1.6em;
  font-weight: 400;
`

const HomeIcon = styled(FiHome)`
  font-size: 1.6em;
  font-weight: 400;
`

export default HeaderComponent
