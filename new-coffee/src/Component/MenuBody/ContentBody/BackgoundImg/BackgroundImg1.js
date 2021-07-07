import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(./img/BackgroundImg/h-7-img-1.jpg)',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '80vh',
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
      <div className={classes.content}>
        Every coffee created is sent with enthusiasm by the Coffee House
      </div>
    </div>
  );
}

export default BackgroundImg1;