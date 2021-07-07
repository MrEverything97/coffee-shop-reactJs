import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function RegisterComponent(props) {
  const { classes, error, setError, setRegister } = props;
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onSignUp = async () => {
    if (password !== rePassword)
      setError('Re-Passwords Do Not Match');
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(data);
      toast.success('Registered successfully');
      // history.push('/login-a');
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };

  return (
    <div className={classes.form}>
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
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="rePassword"
        label="Re-Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={rePassword}
        onChange={(event) => {
          setRePassword(event.target.value);
        }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={onSignUp}
      >
        Sign up
      </Button>
      <Typography className={classes.Error}>{error}</Typography>
    </div>

  );
}

export default RegisterComponent;