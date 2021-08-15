//Dependencies
import React from 'react';
//Internals
import './index.css';
import WomenItems from './WomenItems';
import BaseLayout from '../BaseLayout/index.js';

const WomensProducts = () => (
  <BaseLayout>
  <div className="womens-products">
    <div className="womens-title">
      <h4>Meat&Eggs</h4>
    </div>
    <WomenItems />
  </div>
  </BaseLayout>
);

export default WomensProducts;
