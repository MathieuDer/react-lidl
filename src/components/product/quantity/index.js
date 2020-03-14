import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import * as Actions from '../../../redux/actions'

import PropTypes from 'prop-types'
import Button from '../../common/button'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi'
import styled from 'styled-components'

const Quantity = ({ product, direction }) => {
  const [quantity, setQuantity] = useState(0)

  const dispatch = useDispatch()

  const dicQuantity = e => {
    e.preventDefault()
    if (quantity > 0) setQuantity(quantity - 1)
  }

  const incQuantity = e => {
    e.preventDefault()
    setQuantity(quantity + 1)
  }

  const addToBasketShop = e => {
    e.preventDefault()
    dispatch(Actions.addProductToBasket(product.name, quantity))
  }

  return (
    <Container direction={direction || ''}>
      <QuantityWrapper>
        <FiMinusCircle onClick={e => dicQuantity(e)} />
        <QuantityItem
          value={quantity}
          onChange={() => setQuantity(quantity)}
        ></QuantityItem>
        <FiPlusCircle onClick={e => incQuantity(e)} />
      </QuantityWrapper>
      <Button backgroundColor='#0050aa' onClick={e => addToBasketShop(e)}>
        Ajouter
      </Button>
    </Container>
  )
}
Quantity.propTypes = {
  product: PropTypes.object.isRequired,
  direction: PropTypes.string
}

const Container = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.direction === 'horizontal' ? 'row' : 'column'};
  justify-content: space-evenly;

  margin-bottom: ${props =>
    props.direction === 'horizontal' ? '16px' : '0px'};
`

const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 8px;
`
const QuantityItem = styled.input.attrs({
  type: 'number',
  min: 0,
  maxlength: 3
})`
  margin: 0px 6px;
  width: 3rem;
  text-align: center;
`

export default Quantity
