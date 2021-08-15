import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Cart from './components/Cart';
import Groceries from './components/Women';
import Fruits from './components/Men';
import Veggies from './components/Clothes';
import MeatEggs from './components/Accessories';
import ShowProduct from './components/ShowProduct';
import registerServiceWorker from './registerServiceWorker';
// import Dashboard from "./components/Dashboard"
// import Login from "./components/Login"
// import PrivateRoute from "./PrivateRoute";
// import Signup from "./components/Signup"
// import { AuthProvider } from "./contexts/AuthContext"


ReactDOM.render(
  <BrowserRouter>
    
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cart" component={Cart} />
        <Route path="/women" component={Groceries}  />
        <Route path="/men" component={Fruits} />
        <Route path="/clothes" component={Veggies}  />
        <Route path="/accessories" component={MeatEggs} />
        <Route exact path="/products/:id" component={ShowProduct} />
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} /> */}
      </Switch>
    
  </BrowserRouter>
  
, document.getElementById('root'));
registerServiceWorker();
