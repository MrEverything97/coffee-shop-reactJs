import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drinks from './Drinks/Drinks';
import BackgroundImg2 from '../ContentBody/BackgoundImg/BackgroundImg2';
import SimpleSlider from '../ContentBody/SlickImage';
import Freeze from './Freeze/Freeze';
import TeaAndSmoothie from './TeaAndSmoothie/TeaAndSmoothie';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: 'auto',
    // backgroundColor: '#eae7de',
    // padding: 30,

  },
}));

function Products(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drinks/>
      <BackgroundImg2/>
      <Freeze/>
      <TeaAndSmoothie/>
      <SimpleSlider/>
    </div>
  );
}

export default Products;