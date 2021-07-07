import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  img: {
    width: '100%',
  },
  root: {},
}));

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Slider {...settings}>
        <div>
          <img className={classes.img} src="../img/SlickContent/pexels-photo-4195334.jpeg" alt=""/>
        </div>
        <div>
          <img className={classes.img} src="../img/SlickContent/pexels-brett-sayles-1090668.jpg" alt=""/>
        </div>
        <div>
          <img className={classes.img} src="../img/SlickContent/pexels-photo-1.jpeg" alt=""/>
        </div>
        <div>
          <img className={classes.img} src="../img/SlickContent/pexels-karolina-grabowska-4226806.jpg" alt=""/>
        </div>
        <div>
          <img className={classes.img} src="../img/SlickContent/pexels-fallon-michael-3551722.jpg" alt=""/>
        </div>
        <div>
          <img className={classes.img} src="../img/SlickContent/pexels-photo-2.webp" alt=""/>
        </div>

      </Slider>
    </div>
  );
}

export default SimpleSlider;