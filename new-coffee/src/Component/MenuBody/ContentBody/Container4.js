import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    margin: 'auto',

    backgroundColor: '#78909c',
    // minHeight: "300px"
  },

  gridItem: {
    border: '0px solid',
    color: 'white',
    fontSize: 'xx-large',
  },
  img: {
    width: '100%',
    objectFit: 'contain',

  },
}));

export default function FixedContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center">

        <Grid item xs={2} className={classes.gridItem} direction="row">
          <img className={classes.img} src="../img/Oatmeal Raisin Breakfast Crisps.jpg" alt=""/>
        </Grid>
        <Grid item xs={2} className={classes.gridItem}>
          <img className={classes.img}
               src="../img/Behold & Flourish’s Instagram profile post_ “choose rest today_ reset & get envisioned for the week ahead — we are so for YOU! if you need encouragement comment below, we would love to…” (1).jpg"
               alt=""/>
        </Grid>
        <Grid item xs={2} className={classes.gridItem}>
          <img className={classes.img} src="../img/BÍ KÍP CHỤP ẢNH NƯỚC UỐNG BIẾN BẠN THÀNH FOOD BLOGGER XỊN XÒ.png"
               alt=""/>
        </Grid>
        <Grid item xs={2} className={classes.gridItem}>
          <img className={classes.img} src="../img/for the aesthetic; themes.jpg" alt=""/>
        </Grid>
        <Grid item xs={2} className={classes.gridItem}>
          <img className={classes.img} src="../img/Coffee with joy!.jpg" alt=""/>
        </Grid>
        <Grid item xs={2} className={classes.gridItem}>
          <img className={classes.img} src="../img/g e o r g i a n a.jpg" alt=""/>
        </Grid>

      </Grid>
    </div>
  );
}
