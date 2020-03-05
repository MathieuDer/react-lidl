import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import Card from '../../components/common/Card'

import { getAllProducts } from '../../services/productsService'

import styled from 'styled-components'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi'

const ProductsScreen = ({ history }) => {
  const params = useParams()
  const [quantity, setQuantity] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(getAllProducts())
  }, [params])

  const dicQuantity = (e, value) => {
    e.preventDefault()
    console.log(`Dicreased quantity of ${value} `)
    console.log(quantity)
    if (quantity > 0) setQuantity(quantity - 1)
  }
  const incQuantity = (e, value) => {
    e.preventDefault()
    console.log(`Increased quantity of ${value} `)
    console.log(quantity)
    setQuantity(quantity + 1)
  }
  const addToBasket = (e, value) => {
    e.preventDefault()
    console.log(`${value} added to basket`)
  }

  return (
    <Fragment>
      <CategoriesContainer>
        {products.map((product, i) => (
          <CustomCard key={i}>
            <ProductName>{product.name}</ProductName>
            <ProductImage src={product.images[0]} />
            <Separator />

            <QuantityWrapper>
              <FiMinusCircle onClick={e => dicQuantity(e, product.name)} />
              <QuantityItem
                value={quantity}
                onChange={() => quantity}
              ></QuantityItem>

              <FiPlusCircle onClick={e => incQuantity(e, product.name)} />
            </QuantityWrapper>
            <StyledButton onClick={e => addToBasket(e, product.name)}>
              Ajouter
            </StyledButton>
            <ProductPrice>{product.price}</ProductPrice>
          </CustomCard>
        ))}
      </CategoriesContainer>
    </Fragment>
  )
}

ProductsScreen.propTypes = {
  history: PropTypes.object
}

const CategoriesContainer = styled.div`
  padding: 12px;
`
const CustomCard = styled(Card)`
  &:not(:last-child) > * {
    background-color: red;
    margin-bottom: 12px;
  }
`
const ProductName = styled.div``
const ProductImage = styled.img`
  width: 50%;
`

const Separator = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid black;
  margin: 15px;
  padding: 0;
`

const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const ProductPrice = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid #c6c9cc;
  align-items: center;
  padding: 0.5rem;
  font-weight: 800;
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

const StyledButton = styled.div`
  border-radius: 4px;
  border: none;
  padding: 8px;
  color: white;
  font-size: 0.8rem;
  background-color: #0050aa;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 5px -1px,
    rgba(0, 0, 0, 0.03) 0px 5px 8px 0px;
`

export default ProductsScreen
