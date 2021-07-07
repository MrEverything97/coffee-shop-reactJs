import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// import Button01 from '../Card/Button1/Button01';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    margin: 'auto',
    backgroundColor: 'white',
    // minHeight: "300px"
  },



}));

export default function FixedContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" style={{width:'100%',paddingLeft:120}}>
        <h1>CÀ PHÊ ESPRESSO</h1>
        <h3>Hãy quên đi những bộn bề cuộc sống để tìm thấy những niềm vui nho nhỏ từ ly Cà phê Espresso của House
          Coffee. Bí quyết để cho ra hương vị đậm đà, tinh tế của một tách cà phê Espresso là phương pháp phối trộn độc
          đáo, công phu giữa hai loại cà phê Arabica và Robusta thượng hạng, và đặc biệt là không thể thiếu được kĩ năng
          pha chế điêu luyện từ các Barista của chúng tôi.</h3>
      </Grid>
    </div>
  );
}