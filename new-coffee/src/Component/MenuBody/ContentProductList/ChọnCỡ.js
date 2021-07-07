import React, { useEffect } from 'react';
import { Radio } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import orderBy from 'lodash/orderBy';
import vnd from '../../../utils/vnd';

function ChọnCỡ({ productCart, setProductCart }) {
  const sizeValues = orderBy(productCart.size);
  const [sizeDangChon, setSizeDangChon] = React.useState(null);
  const classes = useStyles();

  useEffect(() => {
    setSizeDangChon(getKeyByValue(productCart.size, sizeValues[0]));
  }, []);

  useEffect(() => {
    setProductCart({
      ...productCart,
      sizeDangChon,
    });
  }, [sizeDangChon]);

  const handleChange = (event) => {
    setSizeDangChon(event.target.value);
  };

  if (!productCart)
    return null;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset">
        <Typography className={classes.price} variant="body2" color="textSecondary" component="div">
          Giá: {vnd(productCart.size[sizeDangChon])}
        </Typography>
        <RadioGroup aria-label="size" name="size1" value={sizeDangChon} onChange={handleChange}>
          {
            sizeValues && sizeValues.length !== 0 && sizeValues.map(val => {
              const key = getKeyByValue(productCart.size, val);
              return (
                <FormControlLabel value={key} control={<Radio/>} label={key}/>
              );
            })
          }

        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default ChọnCỡ;

const useStyles = makeStyles({
  price: {

    fontWeight: 'bold',
    fontSize: 17,
    color: 'red',
  },
  root: {
    paddingLeft: '20px',
  },
});

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}