import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import rtn from 'reactn';
import firebase from 'firebase/app';
import { auth, db } from '../../../firebaseConfig';
import { v4 as uuidv4 } from 'uuid';

const clientId = '711980741927-tuj2jv6t5crg0pijhfr7nvn2lh86pga3.apps.googleusercontent.com';

function LoginReactGoogle() {
  const history = useHistory();
  const [user] = rtn.useGlobal('user');
  const [googleUser, setGoogleUser] = useState(null);


  useEffect(() => {
    console.log('Google Auth Response', user);
    loginFirebase();
  }, [googleUser]);

  const loginFirebase = async () => {
    try {
      // We need to register an Observer on Firebase Auth to make sure auth is initialized.
      if (!googleUser?.tokenId)
        return null;
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, auth)) {
        // Build Firebase credential with the Google ID token.
        let credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser?.tokenId || null);
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential)
          .then(success => {
            localStorage.setItem('user', JSON.stringify(success.user));
            rtn.setGlobal({ user: JSON.parse(JSON.stringify(success.user)) });
            let id = 'doc_' + uuidv4();
            let user = success.user.providerData[0] || '';

            const profile = {
              email: user.email,
              displayName: user.displayName,
              phoneNumber: user.phoneNumber,
              photoURL: user.photoURL,
              uid: user.uid,
            };
            const docRef = db.collection('users').doc(id).set(profile);
            db.collection('users').get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
              });
            });


            history.push('/');
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.log('User already signed-in Firebase.');
      }
    } catch (e) {
      console.log(e);
    }
    const user = firebase.auth().currentUser;

  };

  function isUserEqual(user, firebaseUser) {
    if (firebaseUser) {
      const providerData = firebaseUser?.providerData || [];
      for (let i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === user.googleId) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  const onSuccess = async (res) => {
    console.log(res);
    if (res) {
      console.log('google info', res);
      setGoogleUser(res);


    }
  };

  const onFailure = (res) => {
    console.log('[Login failed] res:', res);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default LoginReactGoogle;
