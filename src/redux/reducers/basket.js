import { BASKET_ADD, BASKET_RMV, BASKET_CLEAR } from '../actions'

const INITIAL_STATE = {
  basket: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BASKET_ADD:
      return { ...state, basket: action.payload }
    case BASKET_RMV:
      return { basket: action.payload }
    case BASKET_CLEAR:
      return { basket: action.payload }

    default:
      return state
  }
}
