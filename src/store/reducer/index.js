import {
  ADD_NEWS,
  AUTH_GOOGLE,
  GET_ALL_NEWS,
  GOOGLE_USER,
  SIGN_OUT,
  GET_NEWS_BY_ID,
  DELETE_NEWS,
  UPDATE_NEWS,
} from '../action/actionTypes'

const initialState = {
  token: null,
  feeds: [],
  feed: {},
  user: {},
}

export function reducerApp(state = initialState, action) {
  switch (action.type) {
    case AUTH_GOOGLE:
      return { ...state, ...action.token }
    case GOOGLE_USER:
      return { ...state, user: action.user }
    case GET_ALL_NEWS:
      return { ...state, ...action.news }
    case ADD_NEWS:
      return { ...state, ...action.newsItem }
    case SIGN_OUT:
      return { ...state, token: action.token }
    case GET_NEWS_BY_ID:
      return { ...state, ...action.feed }
    case DELETE_NEWS:
      return { ...state }
    case UPDATE_NEWS:
      return { ...state }
    default:
      return state
  }
}
