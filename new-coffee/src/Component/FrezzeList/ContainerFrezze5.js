import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import TabFrezzeNoCoffee from '../TabFrezze/TabFrezzeNoCoffee';



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
        <TabFrezzeNoCoffee/>
      </Grid>
    </div>
  );
}