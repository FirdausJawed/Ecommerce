//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
//Internals
import BaseLayout from '../BaseLayout/index.js';
import './index.css';

class CartProducts extends Component {
  static propTypes = {
    addItemToCart: PropTypes.func.isRequired,
  };

  render() {
    return(
      <BaseLayout>
      <div>
        <h1>This is the cart</h1>
        <div className="items">
          {map(this.props.cartProducts, (product) => {
            <h1>{product.name}</h1>
          })}
        </div>
      </div>
      </BaseLayout>
    );
  }
}

export default CartProducts;
