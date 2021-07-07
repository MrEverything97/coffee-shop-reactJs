import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const history = useHistory()

  const handleClickCaphephin = ()=>{
    history.push('/filtered-coffee')
  }
  const handleClickCapheespresso =()=>{
    history.push('/espresso-coffee')
  }
  return (
    <div className={classes.root}>
      <Button
        onClick={handleClickCaphephin}
        variant="contained" color="#bcaaa4"
        style={{ backgroundColor: '#e0e0e0' }}>
        Cà Phê Phin
      </Button>
      <Button
        onClick={handleClickCapheespresso}
        variant="contained" color="#bcaaa4" style={{ backgroundColor: '#e0e0e0' }}>
        Cà Phê Espresso
      </Button>

    </div>
  );
}
