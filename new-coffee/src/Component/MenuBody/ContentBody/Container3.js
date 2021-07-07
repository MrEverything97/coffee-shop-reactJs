import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    margin: 'auto',
    backgroundColor: '#ffffff',
    // minHeight: "300px"
  },

  gridItem: {
    border: '0px solid',
    color: 'black',
    fontSize: 'xx-large',
  },
  img: {
    width: '95%',
    objectFit: 'contain',

  },
}));

export default function FixedContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={5} className={classes.gridItem}>
          <img className={classes.img} src="../img/922184.jpg" alt=""/>
        </Grid>
        <Grid item xs={7} className={classes.gridItem}>
          <h1>
            Sinh Tố
          </h1>

          <p>
            Nếu bạn là người yêu thích những gì mới mẻ và sành điệu để khơi nguồn cảm hứng. Hãy thưởng thức ngay các món
            sinh tố độc đáo mang hương vị tự nhiên tại House Coffee để đánh thức mọi giác quan của bạn, giúp bạn luôn
            căng tràn sức sống.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}