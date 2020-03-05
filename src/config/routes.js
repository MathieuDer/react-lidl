import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from '../screens/login'
import PrivateRoute from './privateRoute'
import ProductsScreen from '../screens/productsScreen'

import HeaderComponent from '../components/header/HeaderComponent'

const Routes = () => {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <PrivateRoute
          exact
          path='/products'
          component={ProductsScreen}
        ></PrivateRoute>
      </Switch>
    </Router>
  )
}

export default Routes
