//Dependencies
import React, { Component } from 'react';
//Internals
import './styles.css';
import ClothesItems from './ClothesItems';
import BaseLayout from '../BaseLayout/index.js';

class Clothes extends Component {
  render() {
    return(
      <BaseLayout>
      <div className="clothes">
        <div className="clothes-title">
          <h4>Veggies</h4>
        </div>
        <ClothesItems />
      </div>
      </BaseLayout>
    );
  }
}

export default Clothes;
