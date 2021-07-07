import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  slider: {
    position: 'relative',
    '& > div:nth-child(4)': {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  imgTop: {
    width: '100%',
    objectFit: 'cover',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      height: '35vh',
    },
  },
}));

export default function VideoSlider(props) {
  const classes = useStyles();
  const img = [
    { image: './img/VideoSliderContent/839407.jpg' },
    { image: './img/VideoSliderContent/1048645.jpg' },
    { image: './img/VideoSliderContent/1044459.jpg' },
    { image: './img/VideoSliderContent/1068405.jpg' },
  ];
  return (
    <Carousel className={classes.slider}
    >
      {
        img.map((item, index) => <img className={classes.imgTop} src={item.image} key={index} alt=""/>)
      }
    </Carousel>
  );

}