import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import ProductList from './components/ProductList/'
import Product from './components/Product'

class App extends Component {

  render() {
    return (

      <Router>
        <Switch>
          <Route path="/product/:id" component={Product} />
          <Route path="/" component={ProductList} />
        </Switch>
      </Router>

    );
  }
}

export default App;