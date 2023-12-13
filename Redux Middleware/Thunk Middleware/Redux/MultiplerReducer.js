// 5. Using Thunk Middleware

import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import axios from 'axios'
import thunk from 'redux-thunk'

// action name constants
const inc = 'increment'
const dec = 'decrement'
const incrByAmt = 'incrementByAmount'
const init = 'init'

//store
const store = createStore(
  combineReducer({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk.default)
)

const history = []

function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case inc:
      return { amount: state.amount + 1 }
    case dec:
      return { amount: state.amount - 1 }
    case incrByAmt:
      return { amount: state.amount + action.payload }
    case init:
      return { amount: action.payload }

    default:
      return state
  }
}

function bonusReducer(state = { bonus: 0 }, action) {}
// Async API call

// async function getUser() {
//   const { data } = await axios.get('http://localhost:3000/accounts/1')
//   console.log(data)
// }

// getUser()

// Action Creators

// async function getUser(dispatch, getState) {
//   const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
//   dispatch(initUser(data.amount))
// }

function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
    dispatch(initUser(data.amount))
  }
}

function initUser(value) {
  return { type: init, payload: value }
}

// function increment() {
//   return { type: inc }
// }

// function decrement() {
//   return { type: dec }
// }

// function incrementByAmount(value) {
//   return { type: incrByAmt, payload: value }
// }

setTimeout(() => {
  store.dispatch(getUser(2))
}, 2000)
