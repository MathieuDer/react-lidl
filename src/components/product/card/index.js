import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Quantity from '../quantity'
import Card from '../../common/card'

import styled from 'styled-components'

const ProductCard = ({ product, history }) => {
  return product ? (
    <Card>
      <ProductName>{product.name}</ProductName>
      <ProductImage src={product.images[0]} />
      <ProductPrice>{product.price} €</ProductPrice>
      <Quantity product={product} />
    </Card>
  ) : (
    <Fragment></Fragment>
  )
}

ProductCard.propTypes = {
  history: PropTypes.object,
  product: PropTypes.object.isRequired
}

const ProductName = styled.div``
const ProductImage = styled.img`
  width: 50%;
`
const ProductPrice = styled.span``

export default ProductCard
