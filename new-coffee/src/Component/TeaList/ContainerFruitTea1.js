import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// import Button01 from '../Card/Button1/Button01';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    margin: 'auto',
    backgroundColor: 'white',
    // minHeight: "300px"
  },



}));

export default function FixedContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" style={{width:'100%',paddingLeft:120}}>
        <h1>Trà Trái Cây</h1>
        <h3>
          Hương vị tự nhiên, thơm ngon của Trà Trái Cây với phong cách hiện đại tại House Coffee sẽ giúp bạn gợi mở
          vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.
        </h3>
      </Grid>
    </div>
  );
}