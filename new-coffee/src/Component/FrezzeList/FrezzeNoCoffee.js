import React from 'react';
import SearchAppBar from '../MenuAppbar1/MenuCf1/AppBarCf1';
import { makeStyles } from '@material-ui/core/styles';
import ContainerFrezze4 from './ContainerFrezze4';
import ContainerFrezze5 from './ContainerFrezze5';
import ContainerCoffee6 from '../CoffeeList/ContainerCoffee6';



const useStyles = makeStyles(theme => ({
  root: {

    width: 'auto',
    margin: 'auto',
    backgroundColor: 'blue',
  },



}));
function FrezzeNoCoffee(props) {
  const classes = useStyles()
  return (
    <div>
      <SearchAppBar/>
      <ContainerFrezze4/>
      <ContainerFrezze5/>
      <ContainerCoffee6/>


    </div>

  );
}

export default FrezzeNoCoffee;