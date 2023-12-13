// 4. Working with Server & API

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import axios from 'axios'

// action name constants
const inc = 'increment'
const dec = 'decrement'
const incrByAmt = 'incrementByAmount'
const init = 'init'

//store
const store = createStore(reducer, applyMiddleware(logger.default))

const history = []

function reducer(state = { amount: 1 }, action) {
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

// Async API call

async function getUser() {
  const { data } = await axios.get('http://localhost:3000/accounts/1')
  console.log(data)
}

getUser()
// Action Creators are synchronous so can't use async so we need to use middleware, thus we can't use them like this since it returns a promise, thus for this purpose we use middlewares, one such is thuk

// async function initUser() {
//   const { data } = await axios.get('http://localhost:3000/accounts/1')
//   return { type: init, payload: data.amount }
// }

function initUser(value) {
  return { type: init, payload: value }
}

function increment() {
  return { type: inc }
}

function decrement() {
  return { type: dec }
}

function incrementByAmount(value) {
  return { type: incrByAmt, payload: value }
}

setInterval(() => {
  store.dispatch(initUser(500))
}, 2000)
