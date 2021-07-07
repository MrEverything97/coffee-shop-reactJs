import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    margin: 'auto',

    backgroundColor: '#ffffff',
    // minHeight: "300px"
  },

  gridItem: {
    // border: '0px solid',
    color: 'black',
    fontSize: 'xx-large',

  },
  img: {
    width: '100%',
    objectFit: 'contain',

  },
}));

export default function FixedContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center">

        <Grid item xs={7} className={classes.gridItem} direction="row">
          <h1>
            Coffee
          </h1>

          <p>
            Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt
            Nam màu mỡ, qua những bí quyết rang xay độc đáo, House Coffee chúng tôi tự hào giới thiệu những dòng sản
            phẩm Cà phê mang hương vị đậm đà và tinh tế.
          </p>
        </Grid>

        <Grid item xs={12} className={classes.gridItem}>
          <img className={classes.img} src="../img/1011052.jpg" alt=""/>
        </Grid>

      </Grid>
    </div>
  );
}
