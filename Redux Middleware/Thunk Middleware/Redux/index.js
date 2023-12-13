//1. Introduction to basics

import { createStore } from 'redux'

//store
const store = createStore(reducer)

const history = [] //stores values in prev states

function reducer(state = { amount: 1 }, action) {
  //reducer is a function
  if (action.type === 'increment') {
    return { amount: state.amount + 1 } //state.amount = state.amount+1 is not recommended, don't use this wayS
  }
  return state
}

//global state
// console.log(store.getState()) //method of store

store.subscribe(() => {
  //another way of getting state
  //it is called whenever state changes i.e. reducer is dispatched

  history.push(store.getState())
  console.log(history)
})

setInterval(() => {
  store.dispatch({
    type: 'increment',
  })
}, 2000)

// console.log(store.getState())

// Three main principles of redux

// Only one Global state in store: obtained thorough store.getState()
// Immutable Updates: State read-only, state cannot be directly updated even in reducers
// Reducers should be pure:No side effects
