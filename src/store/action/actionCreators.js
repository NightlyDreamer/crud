import {
  ADD_NEWS,
  AUTH_GOOGLE,
  GOOGLE_USER,
  SIGN_OUT,
  GET_ALL_NEWS,
  GET_NEWS_BY_ID,
  DELETE_NEWS,
  UPDATE_NEWS,
} from './actionTypes'
import { store } from '../index'

function fetchAuthGoogle(token) {
  return (dispatch) => {
    return fetch('http://127.0.0.1:5000/api/v1/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ token }),
    })
      .then((response) => response.json())
      .then((json) => dispatch(authGoogle(json)))
  }
}
function fetchgetAllNews() {
  return (dispatch) => {
    return fetch('http://127.0.0.1:5000/api/v1/feeds')
      .then((response) => response.json())
      .then((json) => dispatch(getAllNews(json)))
  }
}

function fetchAddNews(token, item) {
  return (dispatch) => {
    return fetch('http://127.0.0.1:5000/api/v1/feeds', {
      method: 'POST',
      headers: {
        'x-access-token': `${token}`,
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((json) => dispatch(addNews(json)))
  }
}
function fetchGetNewsById(id) {
  return (dispatch) => {
    return fetch(`http://127.0.0.1:5000/api/v1/feeds/${id}`)
      .then((response) => response.json())
      .then((json) => dispatch(getNewsById(json)))
  }
}

function fetchDeleteNews(id, token) {
  return (dispatch) => {
    return fetch(`http://127.0.0.1:5000/api/v1/feeds/${id}`, {
      method: 'DELETE',
      headers: {
        'x-access-token': `${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(deleteNews(json)))
  }
}

function fetchUpdateNews(id, token, item) {
  console.log(id, token, item)
  return (dispatch) => {
    return fetch(`http://127.0.0.1:5000/api/v1/feeds/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-access-token': `${token}`,
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((json) => dispatch(updateNews(json)))
  }
}

function updateNews() {
  return {
    type: UPDATE_NEWS,
  }
}

function deleteNews() {
  return {
    type: DELETE_NEWS,
  }
}

function authGoogle(token) {
  return {
    type: AUTH_GOOGLE,
    token,
  }
}

function getAllNews(news) {
  return { type: GET_ALL_NEWS, news }
}

function getNewsById(feed) {
  return {
    type: GET_NEWS_BY_ID,
    feed,
  }
}

function addNews(newsItem) {
  return {
    type: ADD_NEWS,
    newsItem,
  }
}

function googleUser(user) {
  return {
    type: GOOGLE_USER,
    user,
  }
}

function signOut(token = null) {
  console.log('signOut')
  return {
    type: SIGN_OUT,
    token,
  }
}

export const boundGetnewsById = (id) => store.dispatch(fetchGetNewsById(id))
export const boundSignOut = (token) => store.dispatch(signOut(token))
export const buondGoogleUser = (user) => store.dispatch(googleUser(user))
export const boundAuthGoogle = (token) => store.dispatch(fetchAuthGoogle(token))
export const boundGetAllNews = () => store.dispatch(fetchgetAllNews())
export const boundAddNews = (token, item) =>
  store.dispatch(fetchAddNews(token, item))
export const boundGetNewsById = (id) => store.dispatch(getNewsById(id))
export const boundDeleteNews = (id, token) =>
  store.dispatch(fetchDeleteNews(id, token))
export const boundUpdateNews = (id, token, item) =>
  store.dispatch(fetchUpdateNews(id, token, item))
