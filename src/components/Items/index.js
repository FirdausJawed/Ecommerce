//Dependencies
import React, { Component } from 'react';
//Internals
import AllItems from './AllItems';
import './index.css';
import BaseLayout from '../BaseLayout/index.js';

class Products extends Component {
  render() {
    return (
        <BaseLayout>
      <div className="items-wrapper">
        <div className="items-title">
          <h4>All Items</h4>
        </div>
        <AllItems />
      </div>
      </BaseLayout>
    );
  }
}

export default Products;
