import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import AppSinglePageRoute from './App'
import { BrowserRouter as Router/*, Route */} from 'react-router-dom'
import { createBrowserHistory } from "history"

import Header from './pages/Common/Header'
import NavBar from './pages/Common/NavBar'
import Footer from './pages/Common/Footer'
import HomePage from './pages/HomePage/HomePage'

const store = createStore(rootReducer)
const history = createBrowserHistory()

render(
  <Provider store={store}>
  	<Header />
	<NavBar />

  	<Router history={history}>
  		<switch>
		    <AppSinglePageRoute exact path="/" component={() => <div><h1 style={{color:"black"}}>Home</h1></div>} />
  			<AppSinglePageRoute path="/app" component={HomePage} />
		</switch>
  	</Router>
  	
  	<Footer />
  </Provider>,
  document.getElementById('root')
)