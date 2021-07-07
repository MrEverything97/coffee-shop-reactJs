import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from 'firebase/app';
import LoginComponent from './Form/LoginComponent';
import RegisterComponent from './Form/RegisterComponent';
import LoginReactGoogle from './Form/LoginReactGoogle';

// import * as firebase from 'firebase/app';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        House,.JSC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  Error: {
    color: 'red',
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [error, setError] = useState('');
  const [register, setRegister] = useState(false);

  useEffect(() => {
    const sub = firebase.auth().onAuthStateChanged(
      (user) => {
        console.log('Auth State Change', user);
      },
    );
    return () => {
      sub();
    };
  }, []);

  const handleToSignUp = () => {
    setRegister(!register);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          {
            !register ?
              'Sign in'
              :
              'Sign up'
          }
        </Typography>

        {
          register ?
            <RegisterComponent classes={classes} error={error} setError={setError}/>
            :
            <LoginComponent classes={classes} error={error} setError={setError}/>
        }

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleToSignUp}
        >
          {
            register ?
              'Or Sign in'
              :
              'Or Sign Up'
          }
        </Button>

        <LoginReactGoogle/>
      </div>
      <Box mt={8}>
        <Copyright/>
      </Box>
    </Container>
  );
}
