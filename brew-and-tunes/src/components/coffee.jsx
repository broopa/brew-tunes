import React from 'react';
import '../scss/coffee.scss';
import { Link } from 'react-router-dom';
import { WeeklyCoffee } from './data/coffee';


class Coffee extends React.Component {
    render() {
      return (
        <div key={WeeklyCoffee.id} className="content box">
          <h3>Coffee:</h3>
          <p>{WeeklyCoffee.name}</p>
          <h3>Roaster:</h3>
          <p>{WeeklyCoffee.roaster}</p>
          <h3>Origin:</h3>
          <p>{WeeklyCoffee.origin}</p>
          <h3>Brew Style:</h3>
          <p>{WeeklyCoffee.brewType}</p>
          <h3>Bloom:</h3>
          <p>{WeeklyCoffee.bloom}</p>
          <h3>Temp:</h3>
          <p>{WeeklyCoffee.heat}</p>
          <h3>Description:</h3>
          <p>{WeeklyCoffee.desc}</p>
          <a href={WeeklyCoffee.buyUrl} target="_blank" className="button is-primary">Buy Now</a>
          </div>
      );
    }
  }

export default Coffee;