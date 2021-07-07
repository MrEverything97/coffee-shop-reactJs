import React from 'react';
import SearchAppBar from '../MenuAppbar1/MenuCf1/AppBarCf1';
import { makeStyles } from '@material-ui/core/styles';
import MainBody from '../MenuBody/GridA/MainBody';
import Footer1 from '../Footer/Footer1';



const useStyles = makeStyles(theme => ({
  root: {

    width: 'auto',
    margin: 'auto',
    backgroundColor: 'blue',
  },



}));
function ImgA(props) {
  const classes = useStyles()
  return (
    <div>
      <SearchAppBar/>
      <MainBody/>
      <Footer1/>

    </div>

  );
}

export default ImgA;