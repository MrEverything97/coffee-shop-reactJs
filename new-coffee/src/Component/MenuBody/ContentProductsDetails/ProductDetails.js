import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CardProductDetails from './CardProductDetails';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    margin: 'auto',

  },
  gridRoot: {
    width: '100%',
    margin: '30px 0',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const details = [
  {
    id: 'beautiful-place',
    img: '/img/coffeeContent/Coffee1.jpg',
    number: '01',
    title: 'BEAUTIFUL PLACE',
    textContent: 'And a stranger will Phaedrus to rquatos or football, do you want He draweth also the dangers from my own, seeking out and there is nothing in the \'s house. My whether the dangers of Euripides from here to there. Those players to the Greeks barely disclosure or photography. Its scarcely atte lorem tincidunt.',
  },
  {
    id: 'feel-the-coffee',
    img: '/img/coffeeContent/Coffee2.jpg',
    number: '02',
    title: 'FEEL THE COFFEE',
    textContent: 'And a stranger will Phaedrus to rquatos or football, do you want He draweth also the dangers from my own, seeking out and there is nothing in the \'s house. My whether the dangers of Euripides from here to there. Those players to the Greeks barely disclosure or photography. Its scarcely atte lorem tincidunt.',
  },
  {
    id: 'full-taste',
    img: '/img/coffeeContent/Coffee3.jpg',
    number: '03',
    title: 'FULL TASTE',
    textContent: 'And a stranger will Phaedrus to rquatos or football, do you want He draweth also the dangers from my own, seeking out and there is nothing in the \'s house. My whether the dangers of Euripides from here to there. Those players to the Greeks barely disclosure or photography. Its scarcely atte lorem tincidunt.',
  },
];


function ProductDetails(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridRoot} spacing={2}>
        {
          details.map((detail, index) => {
            return (
              <Grid key={index} item md={4} sm={6} xs={12} className={classes.gridItem}>
                <CardProductDetails detail={detail}/>
              </Grid>
            );
          })
        }
      </Grid>
      {/*<BackgroundImg1/>*/}
    </div>
  );
}

export default ProductDetails;