import React, { Component } from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Home from './component/home';
import Header from './component/header';
import Footer from './component/footer';
import Accesories from './component/accesories';
import Ipad from './component/ipad';
import Iphone from './component/iphone';
import Macbook from './component/macbook';
import Store from './component/store';
import Cart from './component/cart';
import{io} from 'socket.io-client';
 class App extends Component {
   constructor(){
     super();
     this.socket = io("http://localhost:3000")

   }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch >
            <Route path="/cart" component={Cart} />
            <Route path="/store" component={Store} />
            <Route path="/ipad" component={Ipad} />
            <Route path="/iphone" component={Iphone} />
            <Route path="/macbook" component={Macbook} />
            <Route path="/accesories" component={Accesories} />
            <Route path="/" component={Home} />
           </Switch>
          <Footer />

        </BrowserRouter>
      </div>
    )
  }
}
export default App;