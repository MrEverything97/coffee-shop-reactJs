import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  titleRoot: {
    fontFamily: 'Merriweather,serif',
    fontSize: '18px',
    fontStyle: 'italic',
    lineHeight: '27px',
    letterSpacing: 0,
    color: '#c7a17a',
    margin: 0,
    paddingTop: '60px',

  },
  divRoot: {
    display: 'flex',
    minHeight: '350px',
    alignItems: 'center',
    backgroundColor: '#eae7de',
  },
  content: {
    width: '100%',
    textAlign: 'center',
    paddingBottom: '60px',
  },
  gridItem: {
    border: '0px solid',
    color: 'black',
    fontSize: 'xx-large',
    // flexGrow:1,

  },
  img: {
    width: '100%',
    objectFit: 'contain',
    position: 'relative',
  },
  divider: {
    width: '20%',
    borderBottomWidth: '2px',
    margin: 'auto',
    height: '5px',
    backgroundColor: '#c7a17a',
  },
  h1: {
    fontSize: '50px',
    margin: '30px 0 50px 0',
  },


}));

export default function ContentTop() {
  const classes = useStyles();
  return (
    <div className={classes.divRoot}>
      <div className={classes.content}>
        <div className={classes.titleRoot}>A Coffee Of House</div>
        <div className={classes.h1}> We offer you the best products
        </div>
        <Divider className={classes.divider}/>
      </div>
    </div>


  );
}