import React from 'react';
import SearchAppBar from '../MenuAppbar1/MenuCf1/AppBarCf1';
import ContainerCoffee1 from './ContainerCoffee1';
import ContainerCoffee2 from './ContainerCoffee2';
import ContainerCoffee3 from './ContainerCoffee3';

function CoffeePhin(props) {
  return (
    <div>
      <SearchAppBar/>
      <ContainerCoffee1/>
      <ContainerCoffee2/>
      <ContainerCoffee3/>
    </div>

  );
}

export default CoffeePhin;