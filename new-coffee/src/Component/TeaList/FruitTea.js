import React from 'react';
import SearchAppBar from '../MenuAppbar1/MenuCf1/AppBarCf1';
import { makeStyles } from '@material-ui/core/styles';
import ContainerFruitTea1 from './ContainerFruitTea1';
import ContainerFruitTea2 from './ContainerFruitTea2';
import ContainerFruitTea3 from './ContainerFruitTea3';


const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    margin: 'auto',
    backgroundColor: 'blue',
  },



}));
function FruitTea(props) {
  const classes = useStyles()
  return (
    <div>
      <SearchAppBar/>
      <ContainerFruitTea1/>
      <ContainerFruitTea2/>
      <ContainerFruitTea3/>
    </div>

  );
}

export default FruitTea;