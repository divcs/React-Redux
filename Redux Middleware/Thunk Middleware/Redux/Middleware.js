// 2. using middleware

// why to use middleware: dispatch dispatches an event directly to the reducer, so middleware comes in between this process to perform some task like checking or searching, api is a middleware

// it avoids to access the reducer fast, you can call an api before sending the event to reducer and middleware will perform this task

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
//store
const store = createStore(reducer, applyMiddleware(logger.default))

const history = []

function reducer(state = { amount: 1 }, action) {
  if (action.type === 'increment') {
    return { amount: state.amount + 1 }
  }
  if (action.type === 'decrement') {
    return { amount: state.amount - 1 }
  }
  if (action.type === 'incrementByAmount') {
    return { amount: state.amount + action.payload }
  }
  return state
}

//global state

// store.subscribe(() => {
//   history.push(store.getState())
//   console.log(history)
// })

setInterval(() => {
  store.dispatch({
    // type: 'increment', //action dispatching
    // type: 'decrement',
    type: 'incrementByAmount',
    payload: 4,
  })
}, 5000)
