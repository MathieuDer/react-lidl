import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Modal from '../../common/Modal'
import styled from 'styled-components'

const Basket = ({ display, onClose }) => {
  const basket = useSelector(state => state.basket.basket)
  const [basketState, setBasketState] = useState(false)

  useEffect(() => {
    setBasketState(display)
  }, [display])

  return (
    <Modal
      display={basketState}
      width={`80%`}
      title={`Mon panier`}
      onClose={onClose}
    >
      {basket && basket.length !== 0 ? (
        <BasketList>
          {basket.map((product, i) => (
            <BasketProduct key={i}>
              <ProductQuantity>{product.quantity}x</ProductQuantity>
              <ProductName>{product.name}</ProductName>
            </BasketProduct>
          ))}
        </BasketList>
      ) : (
        <EmptyBasket>Panier vide</EmptyBasket>
      )}
    </Modal>
  )
}

Basket.propTypes = {
  display: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

const EmptyBasket = styled.div`
  color: #a6a7a5;
  text-transform: uppercase;
`

const BasketList = styled.ul`
  list-style: none;
  width: 100%;
`
const BasketProduct = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
const ProductName = styled.div``
const ProductQuantity = styled.div``
export default Basket
