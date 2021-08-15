//Dependencies
import React from 'react';
//Internals
import MenItems from './MenItems';
import './index.css';
import BaseLayout from '../BaseLayout/index.js';

const MensProducts = () => (
  <BaseLayout>
  <div className="mens-products">
    <div className="mens-title">
      <h4>Fruits</h4>
    </div>
    <MenItems />
  </div>
  </BaseLayout>
);


export default MensProducts;
