import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TeaAndSmoothieList from './TeaAndSmoothieList';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: '',
  },
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#eae7de',
    fontFamily: 'Dancing Script, cursive',
  },
  divider: {
    width: '15%',
    borderBottomWidth: '2px',
    margin: 'auto',
    height: '5px',
    backgroundColor: '#c7a17a',
  },
}));

function TeaAndSmoothie(props) {
  const classes = useStyles();

  return (
    <div className={classes}>
      <div className={classes.title}>
        Menu Tea - Smoothie.
        <Divider className={classes.divider}/>
      </div>
      <TeaAndSmoothieList classes={classes}/>
    </div>
  );
}

export default TeaAndSmoothie;