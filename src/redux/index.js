import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers'

const middlewares = [logger, thunk]

const persistConfig = {
  key: 'lidl',
  storage,
  timeout: null
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = compose(applyMiddleware(...middlewares))(createStore)(
  persistedReducer
)

let persistor = persistStore(store)

export { store, persistor }
