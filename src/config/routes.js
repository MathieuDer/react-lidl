import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import Login from '../screens/login'
import PrivateRoute from './privateRoute'
import ProductsScreen from '../screens/productsScreen'

import HeaderComponent from '../components/header/HeaderComponent'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginContainer} />
        <Route component={DefaultContainer} />
      </Switch>
    </Router>
  )
}

const LoginContainer = () => (
  <>
    <Route exact path='/' render={() => <Redirect to='/' />} />
    <Route path='/' component={Login} />
  </>
)

const DefaultContainer = () => (
  <>
    <HeaderComponent />
    <PrivateRoute
      exact
      path='/products'
      component={ProductsScreen}
    ></PrivateRoute>
  </>
)

export default Routes
