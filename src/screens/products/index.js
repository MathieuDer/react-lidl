import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import ProductCard from '../../components/product/card'

import { getAllProducts } from '../../services/productsService'

import styled from 'styled-components'

const CategoryScreen = ({ history }) => {
  const params = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(getAllProducts())
  }, [params])

  return (
    <Fragment>
      <CategoriesContainer>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} history={history} />
        ))}
      </CategoriesContainer>
    </Fragment>
  )
}

CategoryScreen.propTypes = {
  history: PropTypes.object
}

const CategoriesContainer = styled.div`
  padding: 12px;
`

export default CategoryScreen
