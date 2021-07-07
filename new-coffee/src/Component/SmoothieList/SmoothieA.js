import React from 'react';
import SearchAppBar from '../MenuAppbar1/MenuCf1/AppBarCf1';
import { makeStyles } from '@material-ui/core/styles';
import ContainerSmothie1 from './ContainerSmoothie1';
import ContainerSmothie2 from './ContainerSmoothie2';
import ContainerSmothie3 from './ContainerSmoothie3';


const useStyles = makeStyles(theme => ({
  root: {

    width: 'auto',
    margin: 'auto',
    backgroundColor: 'blue',
  },



}));

function SmoothieA(props) {
  const classes = useStyles();
  return (
    <div>
      <SearchAppBar/>
      <ContainerSmothie1/>
      <ContainerSmothie2/>
      <ContainerSmothie3/>
    </div>

  );
}

export default SmoothieA;