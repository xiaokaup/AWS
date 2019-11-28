import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { saveActionMessages } from './middlewares'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
import rootReducer, { enableBatching } from './0_reducers'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from "history"


const store = createStore(
	enableBatching(rootReducer),
	applyMiddleware(thunk, createLogger(), saveActionMessages)
)
const history = createBrowserHistory()

render(
  <Provider store={store}>
  	<Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)