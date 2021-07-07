import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function LoginComponent(props) {
  const { classes, error, setError } = props;
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    console.log('start onclick', email, password);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(results => {
        console.log(results);
        toast.success('Login successfully');

        history.push('/');
      })
      .catch(function(error) {
        setError(error.message);
        console.log(error);
      });
  };
  return (
    <div className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        value={email}
        onChange={(event) => {
          console.log(event.target.value);
          setEmail(event.target.value);
        }}
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary"/>}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={onLogin}
      >
        Sign In
      </Button>
      <Typography className={classes.Error}>{error}</Typography>
    </div>

  );
}

export default LoginComponent;