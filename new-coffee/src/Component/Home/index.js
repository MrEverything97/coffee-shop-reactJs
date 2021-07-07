import React from 'react';
import SearchAppBar from '../MenuAppbar1/MenuCf1/AppBarCf1';
import Footer1 from '../Footer/Footer1';
import MainBody from '../MenuBody/GridA/MainBody';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
  },
}));
function Index(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <SearchAppBar/>
      <MainBody/>
      <Footer1/>
    </div>
  );
}

export default Index;