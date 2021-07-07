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
        <h1>Freeze Không Cà Phê</h1>
        <h3>
          Nếu bạn là người yêu thích những gì mới mẻ và sành điệu để khơi nguồn cảm hứng. Hãy thưởng thức ngay các món nước đá xay độc đáo mang hương vị tự nhiên tại Highlands Coffee để đánh thức mọi giác quan của bạn, giúp bạn luôn căng tràn sức sống.        </h3>

      </Grid>
    </div>
  );
}