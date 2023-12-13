import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// Redux Import
import { Provider } from 'react-redux'

// Store
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
  // Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
