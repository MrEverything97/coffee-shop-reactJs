import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// import Button01 from '../Card/Button1/Button01';
import TabCoffeeEspresso from '../TabCoffee/TabCoffeeEspresso';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    margin: 'auto',
    backgroundColor: '#8d6e63',
    // minHeight: "300px"
  },


}));

export default function FixedContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <TabCoffeeEspresso/>
      </Grid>
    </div>
  );
}