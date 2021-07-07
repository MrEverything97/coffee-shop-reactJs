import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoSlider from '../SliderTop/VideoSlider';
import ContentTop from '../ContentBody/ContentTop';
import ProductDetails from '../ContentProductsDetails/ProductDetails';
import Products from '../ContentProductList/Products';
import BackgroundImg1 from '../ContentBody/BackgoundImg/BackgroundImg1';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 'auto',
    margin: 'auto',
  },
}));

function MainBody(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <VideoSlider/>
      <ContentTop/>
      <ProductDetails/>
      <BackgroundImg1/>
      <Products/>
    </div>
  );
}

export default MainBody;