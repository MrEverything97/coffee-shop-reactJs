import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyle = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(./img/BackgroundImg/1011052.jpg)',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '80vh',
  },
  content: {
    width: '100%',
    fontSize: '55px',
    color: 'black',
    textAlign: 'center',
    lineHeight: '60px',
    paddingTop: '20%',
    paddingLeft: '3%',
    [theme.breakpoints.down('sm')]: {
      lineHeight: '40px !important',
      fontSize: '30px',
    },
  },

}));

function BackgroundImg2() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container className={classes.content}>
        すべての淹れたてのコーヒーはCoffeeHouseによって熱心に送られます
      </Grid>

    </div>
  );
}

export default BackgroundImg2;