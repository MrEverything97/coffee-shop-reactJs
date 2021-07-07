import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import rtn from 'reactn';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '6px',
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const history = useHistory();
  const [user] = rtn.useGlobal('user');

  const handleClickLoginA = () => {
    history.push('login-a');
  };

  const handleClickLogout = async () => {
    try {
      if (window?.gapi?.auth?.getAuthInstance())
        await window.gapi.auth2.getAuthInstance().disconnect();
      await firebase.auth().signOut();

      rtn.setGlobal({
        user: null,
      });
      localStorage.setItem('user', null);
      console.log('Sign-out successful');
      history.push('/login-a');
    } catch (e) {
      console.log(e);
    }
  };

  // console.log('auth', auth);

  return (
    <div className={classes.root}>
      {
        user ?
          <Button
            className={classes.button}
            onClick={handleClickLogout}
            variant="contained" color="#bcaaa4"
            style={{ backgroundColor: '#ffffff' }}>
            Log Out
          </Button>
          :
          <Button
            className={classes.button}
            onClick={handleClickLoginA}
            variant="contained" color="#bcaaa4"
            style={{ backgroundColor: '#ffffff' }}>
            Log In
          </Button>
      }
    </div>
  );
}
