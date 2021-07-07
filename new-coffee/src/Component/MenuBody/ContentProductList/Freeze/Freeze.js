import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FreezeList from './FreezeList';
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

function Freeze(props) {
  const classes = useStyles();

  return (
    <div className={classes}>
      <div className={classes.title}>
        Menu Frezze.
        <Divider className={classes.divider}/>
      </div>
      <FreezeList classes={classes}/>
    </div>
  );
}

export default Freeze;