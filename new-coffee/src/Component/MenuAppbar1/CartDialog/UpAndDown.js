import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Typography } from 'antd';
import { db } from '../../../firebaseConfig';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(3),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
  },
  content: {
    display: 'flex',

  },
  numContent: {
    marginRight: '20px',
    marginTop: '5px',


  },
}));

export default function UpAndDown({ productCart, setProductCart = null, isUpdateCart = false }) {
  const classes = useStyles();
  const [numSelect, setNumSelect] = useState(productCart?.soLuongDaChon || 1);

  // console.log(product);


  const handleClick = async (action) => {
    try {
      let soluong;
      if (action === 'tang') {
        soluong = numSelect + 1;
        setNumSelect(soluong);
      } else {
        soluong = numSelect - 1;
        if (soluong < 1)
          return null;
        setNumSelect(soluong);
      }
      if (isUpdateCart) {
        const cartDocRef = db.collection('carts').doc(productCart.id);
        await cartDocRef.set({
          soLuongDaChon: soluong,
          updatedAt: moment().format(),
        }, { merge: true });
        return null;
      }
      setProductCart({
        ...productCart,
        soLuongDaChon: soluong,
      });
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.numContent}>

          <Typography>{numSelect}</Typography>

        </div>
        <div>
          <ButtonGroup>
            <Button
              aria-label="reduce"
              onClick={() => handleClick('giam')}
            >
              <RemoveIcon fontSize="small"/>
            </Button>
            <Button
              aria-label="increase"
              onClick={() => handleClick('tang')}
            >
              <AddIcon fontSize="small"/>
            </Button>
          </ButtonGroup>
        </div>

      </div>

    </div>
  );
}
