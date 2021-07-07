import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBarCf1 from '../../../../MenuAppbar1/MenuCf1/AppBarCf1';


const useStyle = makeStyles(theme => ({

  root: {
    backgroundImage: 'url(./img/856353.jpg)',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '45vh',
    backgroundSize: 'cover',


  },
  content: {
    width: '100%',
    fontSize: '45px',
    color: 'white',
    textAlign: 'center',
    paddingTop: '300px',
    fontFamily: 'Merriweather,serif',
    fontStyle: 'italic',
    lineHeight: '40px',

  },

}));

function BackgroundImg1() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <AppBarCf1/>
      <div className={classes.content}>
        Menu Drinks
      </div>
    </div>
  );
}

export default BackgroundImg1;