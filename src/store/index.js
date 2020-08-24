import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducerApp } from './reducer'

const initialState = {
  token: null,
  feeds: [],
  feed: {},
  creator: {
    _id: null,
    displayName: null,
  },
  user: {},
}

const configureStore = (state = initialState) => {
  let middleware = applyMiddleware(/* refreshToken, */ thunkMiddleware)

  middleware = composeWithDevTools(middleware)

  return createStore(reducerApp, state, middleware)
}

const store = configureStore()

export { store }
