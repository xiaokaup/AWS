import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './0_reducers'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from "history"


const store = createStore(rootReducer)
const history = createBrowserHistory()

render(
  <Provider store={store}>
  	<Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)