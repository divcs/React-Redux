// store: stores the current state of the application

import { createStore } from 'redux'
import rootReducer from './rootReducer'
const store = createStore(rootReducer)

const dummyReducer = () => {
  return 'hello'
}

// const store = createStore(dummyReducer)
export default store
