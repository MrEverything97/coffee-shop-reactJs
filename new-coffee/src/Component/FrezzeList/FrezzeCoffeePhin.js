import React from 'react';
import SearchAppBar from '../MenuAppbar1/MenuCf1/AppBarCf1';
import { makeStyles } from '@material-ui/core/styles';
import ContainerFrezze1 from './ContainerFrezze1';
import ContainerFrezze2 from './ContainerFrezze2';
import ContainerFrezze3 from './ContainerFrezze3';


const useStyles = makeStyles(theme => ({
  root: {

    width: 'auto',
    margin: 'auto',
    backgroundColor: 'blue',
  },



}));
function FrezzeCoffePhin(props) {
  const classes = useStyles()
  return (
    <div>
      <SearchAppBar/>
      <ContainerFrezze1/>
      <ContainerFrezze2/>
      <ContainerFrezze3/>
    </div>

  );
}

export default FrezzeCoffePhin;