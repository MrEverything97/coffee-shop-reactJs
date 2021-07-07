import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    width: '50%',
    fontSize: '15px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
      minWidth: '30px',
    },
  },
  img: {
    width: '170px',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const history = useHistory();


  return (
    <div className={classes.root}>
      <img
        onClick={() => {
          history.push('/');
        }} className={classes.img}
        src={'https://firebasestorage.googleapis.com/v0/b/House-api-250517.appspot.com/o/public%2FHouse-hp%2FHouse-home-min.png?alt=media&token=bb47acd1-00d3-4558-874f-21e382935e5e'}
        alt={'House coffee'}
      />
      <div className={classes.title}>
        <div>
          {getGlobal().user.uid}
        </div>
      </div>
    </div>
  );
}
