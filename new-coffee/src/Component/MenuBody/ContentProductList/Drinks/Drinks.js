import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DrinkList from './DrinkList';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: '',
  },
  title: {
    fontSize: '55px',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#eae7de',
    // fontFamily: 'Pacifico, cursive',
    fontFamily: 'Dancing Script, cursive',
  },


  divider: {
    width: '10%',
    borderBottomWidth: '2px',
    margin: 'auto',
    height: '5px',
    backgroundColor: '#c7a17a',
  },
}));

function Drinks(props) {
  const classes = useStyles();

  return (
    <div className={classes}>
      <div className={classes.title}>
        Menu Coffee
        <Divider className={classes.divider}/>

      </div>
      <DrinkList classes={classes}/>
    </div>
  );
}

export default Drinks;