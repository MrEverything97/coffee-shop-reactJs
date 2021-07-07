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
  const history = useHistory();

  const handleClickSmoothieA = () => {
    history.push('/smoothie');
  };

  return (
    <div className={classes.root}>
      <Button
        onClick={handleClickSmoothieA}
        variant="contained"
        style={{ color: 'black', backgroundColor: '#e0e0e0' }}>
        Sinh Tố Hoa Quả
      </Button>

    </div>
  );
}
