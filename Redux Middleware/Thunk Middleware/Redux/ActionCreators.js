// 3. Action Creators

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
// action name constants
const inc = 'increment'
const dec = 'decrement'
const incrByAmt = 'incrementByAmount'
//store
const store = createStore(reducer, applyMiddleware(logger.default))

const history = []

function reducer(state = { amount: 1 }, action) {
  if (action.type === inc) {
    return { amount: state.amount + 1 }
  }
  if (action.type === dec) {
    return { amount: state.amount - 1 }
  }
  if (action.type === incrByAmt) {
    return { amount: state.amount + action.payload }
  }
  return state
}

//global state

// store.subscribe(() => {
//   history.push(store.getState())
//   console.log(history)
// })

// Action Creators

//note: ACTION NAME CONSTANS: since the type of these functions are string values and so in reducer which can be easily spelt wrong, thus to avoid any error due to this, we prefer using action name constants
function increment() {
  return { type: inc }
}

function decrement() {
  return { type: dec }
}

function incrementByAmount(value) {
  return { type: incrByAmt, payload: value } //no need for hard coding the value of payload here
}
setInterval(() => {
  store.dispatch(incrementByAmount(5))
}, 2000)
