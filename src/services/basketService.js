const BASKET_LOCALSTORAGE = 'BASKET'

const getBasket = async () => {
  let products =
    JSON.parse(await localStorage.getItem(BASKET_LOCALSTORAGE)) || []
  return products || []
}

const addToBasket = async (name, quantity) => {
  if (name && quantity) {
    let products = await getBasket()
    products.push({ name: name, quantity: quantity })
    await localStorage.setItem(BASKET_LOCALSTORAGE, JSON.stringify(products))
  }
}

export { getBasket, addToBasket }
