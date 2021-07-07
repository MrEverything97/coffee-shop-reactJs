import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    display: 'flex',
  },

}));

export default function InsetDividers() {
  const classes = useStyles();

  return (

    <List className={classes.root}>
      <ListItem>

        <ListItemText primary="Product 1:"/>
      </ListItem>
      <Divider variant="inset" component="li"/>
      <ListItem>

        <ListItemText primary="Product 2:"/>
      </ListItem>
      <Divider variant="inset" component="li"/>
      <ListItem>
        <ListItemText primary="Product 3:"/>
      </ListItem>
      <Divider variant="inset" component="li"/>
      <ListItem>
        <ListItemText primary="Total"/>
      </ListItem>
      <Divider variant="inset" component="li"/>
    </List>

  );
}
