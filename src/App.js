import React, {Component} from 'react'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router'
import { Provider } from 'react-redux'
import store from './store/configureStore'
import Navigation from './components/navigation'
import Home from './components/home'
import Basket from './components/basket'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Navigation}>
              <IndexRoute component={Home} />
              <Route path="/basket" component={Basket} />
            </Route>
        </Router>
      </Provider>
    )
  }
}

export default App
