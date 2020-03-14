// Liste des types
export const BASKET_ADD = 'BASKET_ADD'
export const BASKET_RMV = 'BASKET_RMV'
export const BASKET_CLEAR = 'BASKET_CLEAR'

export const addProductToBasket = (productName, quantity) => {
  return async (dispatch, getState) => {
    const newBasket = []
    newBasket.push({
      name: productName,
      quantity: quantity
    })

    const currBasket = getState().basket.basket
    const basket =
      currBasket.length > 0 ? newBasket.concat(currBasket) : newBasket

    dispatch({
      type: BASKET_ADD,
      payload: basket
    })
  }
}

export const clearBasket = () => {
  return async dispatch => {
    console.log(`Action ${BASKET_CLEAR} - Basket Cleared`)
    dispatch({
      type: BASKET_CLEAR,
      payload: []
    })
  }
}

export const removeProductFromBasket = productName => {
  return async dispatch => {
    console.log(`Action ${BASKET_RMV} - ${productName} removed from basket `)
    dispatch({
      type: BASKET_RMV,
      payload: []
    })
  }
}
