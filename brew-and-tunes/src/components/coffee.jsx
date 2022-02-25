import React from 'react';
import '../scss/coffee.scss';
import { WeeklyCoffee } from './data/coffee';


class Coffee extends React.Component {
    render() {
      return (
        <div key={WeeklyCoffee.id}>
          <h3>{WeeklyCoffee.name}</h3>
          <h4>{WeeklyCoffee.roaster}</h4>
          <p>{WeeklyCoffee.desc}</p>
        </div>
      );
    }
  }

export default Coffee;