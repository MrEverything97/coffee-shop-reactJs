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

  const handleClickFruitTea = ()=>{
    history.push('/fruit-tea')
  }
  // const handleClickCapheespresso =()=>{
  //   history.push('/espresso-coffee')
  // }

  return (
    <div className={classes.root}>
      <Button
        onClick={handleClickFruitTea}
        variant="contained" color="#bcaaa4"
        style={{ backgroundColor: '#e0e0e0' }}>
        TRÀ TRÁI CÂY
      </Button>



      {/*<Button variant="contained" color="#bcaaa4" style={{ backgroundColor: '#e0e0e0' }}>*/}
      {/*  Trà Vải*/}
      {/*</Button>*/}

    </div>
  );
}
