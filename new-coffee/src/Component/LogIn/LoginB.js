import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase/app';
import rtn from 'reactn';
import { auth } from '../../firebaseConfig';

const { useGlobal } = rtn;
// const uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//       console.log('authResult', authResult);
//       console.log('redirectUrl', redirectUrl);
//       return true;
//     },
//   },
//   signInFlow: 'popup',
//   signInSuccessUrl: '/',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     // "password",
//   ],
// };

/**
 * @return {null}
 */

function Login({ history }) {
  const [authUser] = useGlobal('authUser');
  console.log({ authUser });
  console.log({ auth });

  useEffect(() => {
    const sub = firebase.auth().onAuthStateChanged(
      (user) => {
        console.log({ user });
      },
    );
    return () => {
      sub();
    };
  }, []);

  useEffect(() => {
    // auth.signInWithEmailAndPassword("phi@House.com","123456")
  }, []);

  return (
    <Grid container justify={'center'} alignItems={'center'} direction={'column'}>
      <p>SIGN-IN</p>
      {/*<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>*/}
    </Grid>
  );

}

export default withRouter(Login);
