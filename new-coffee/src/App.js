import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Index from './Component/Home';
import CoffeePhin from './Component/CoffeeList/CoffeePhin';
import CoffeeEspresso from './Component/CoffeeList/CoffeeEspresso';
import FrezeeCoffeePhin from './Component/FrezzeList/FrezzeCoffeePhin';
import FrezzeNoCoffee from './Component/FrezzeList/FrezzeNoCoffee';
import FruitTea from './Component/TeaList/FruitTea';
import SmoothieA from './Component/SmoothieList/SmoothieA';
import LoginA from './Component/LogIn/LoginA';
import ImgA from './Component/ImgAppbar/ImgA';
import firebase from 'firebase/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from './firebaseConfig';
import * as reactn from 'reactn';

// import * as firebase from 'firebase/app'

function App() {
  const history = useHistory();
  const [user] = reactn.default.useGlobal('user');

  useEffect(() => {
    if (!user.uid)
      return;

    const sub = db.collection('carts')
      .where('userId', '==', user.uid)
      .where('daThanhToan', '==', false)
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          setGlobal({
            carts: snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })),
          });
        }
      });

    const subOrders = db.collection('orders')
      .where('uid', '==', user.uid)
      .onSnapshot(snapshot => {
        if (snapshot.size > 0) {
          setGlobal({
            orders: snapshot.docs.map(snap => ({ ...snap.data(), id: snap.id })),
          });
        }
      });


    return () => {
      if (sub)
        return sub();
      if (subOrders)
        return subOrders();
    };
  }, [user]);

  useEffect(() => {
    checkUser();
  }, []);


  const checkUser = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        history.push('/');
        setGlobal({ user });

      } else {
        history.push('/login-a');
        firebase.auth().signInAnonymously()
          .then(user => {
            console.log(user);
            setGlobal({ user });

          })
          .catch(e => {
            console.log('signInAnonymously error');
            console.log(e);
          });
      }
    });
  };
  return (
    <div>

      <Switch>
        <Route exact path={'/'} component={Index}/>
        <Route exact path={'/filtered-coffee'} component={CoffeePhin}/>
        <Route exact path={'/espresso-coffee'} component={CoffeeEspresso}/>
        <Route exact path={'/frezze-coffee'} component={FrezeeCoffeePhin}/>
        <Route exact path={'/frezze-is-not-coffee'} component={FrezzeNoCoffee}/>
        <Route exact path={'/fruit-tea'} component={FruitTea}/>
        <Route exact path={'/smoothie'} component={SmoothieA}/>
        <Route exact path={'/login-a'} component={LoginA}/>
        <Route exact path={'/img-a'} component={ImgA}/>


      </Switch>

      <ToastContainer/>

    </div>
  );
}

export default App;
