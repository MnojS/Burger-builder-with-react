import React, { Component } from 'react'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'

import Layout from './component/Layout/Layout'
import Checkout from './container/Checkout/Checkout'
import {BrowserRouter , Route , Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout"  component={Checkout} />
          </Switch>
        </Layout>
      </BrowserRouter> 
    )
  }
};
export default App;
