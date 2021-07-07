import React from 'react';
import SearchAppBar from '../MenuAppbar1/MenuCf1/AppBarCf1';
import { makeStyles } from '@material-ui/core/styles';
import Footer1 from '../Footer/Footer1';
import LoginC from './LoginC';


const useStyles = makeStyles(theme => ({
  root: {

    width: 'auto',
    margin: 'auto',
    backgroundColor: 'green',
  },


}));

function Application(props) {
  return (
    <div>
      <SearchAppBar/>
      <LoginC/>
      <Footer1/>
    </div>

  );
}

export default Application;