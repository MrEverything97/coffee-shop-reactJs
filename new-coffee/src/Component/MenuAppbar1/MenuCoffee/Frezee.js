import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

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

  const handleClickFrezeeCoffee = ()=>{
    history.push('/frezze-coffee')
  }
  const handleClickFrezee = ()=>{
    history.push('/frezze-is-not-coffee')
  }


  return (
    <div className={classes.root}>
      <Button
        onClick={handleClickFrezeeCoffee}
        variant="contained" color="#bcaaa4"
        style={{ backgroundColor: '#e0e0e0' }}>
        Frezee Cà Phê Phin
      </Button>


      <Button
        onClick={handleClickFrezee}
        variant="contained" color="#bcaaa4"
        style={{ backgroundColor: '#e0e0e0' }}>
        Freeze Không Cà Phê
      </Button>

    </div>
  );
}
