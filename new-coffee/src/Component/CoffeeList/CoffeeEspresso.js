import React from 'react';
import SearchAppBar from '../MenuAppbar1/MenuCf1/AppBarCf1';
import { makeStyles } from '@material-ui/core/styles';
import ContainerCoffee4 from './ContainerCoffee4';
import ContainerCoffee5 from './ContainerCoffee5';
import ContainerCoffee6 from './ContainerCoffee6';




const useStyles = makeStyles(theme => ({
  root: {

    width: '70%',
    margin: 'auto',
    backgroundColor: 'white',
  },



}));
function CoffeeEspresso(props) {
  const classes = useStyles()
  return (
    <div>
      <SearchAppBar/>
      <ContainerCoffee4/>
      <ContainerCoffee5/>
      <ContainerCoffee6/>

    </div>
  );
}

export default CoffeeEspresso;