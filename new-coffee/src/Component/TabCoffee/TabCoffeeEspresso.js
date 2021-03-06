import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import BuyNow from '../CoffeeList/BuyNow';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={6}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>

  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    // height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  img: {
    width: '100%',
    // height:300,
    objectFit: 'contain',
  },
  gridItem: {
    // width: '50%',
    // fontSize: 'inherit'
  },

}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={12} md={3}>
          <Tabs
            orientation="vertical"
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="CAPPUCCINO" {...a11yProps(0)}  />
            <Tab label="LATTE" {...a11yProps(1)} />
            <Tab label="ESPRESSO"{...a11yProps(2)} />
          </Tabs>
        </Grid>

        <Grid item sm={12} md={9}>
          <TabPanel value={value} index={0} alignItems="center">
            <Grid container>
              <Grid item xs={4} className={classes.gridItem} style={{ width: '50%' }}>
                <img className={classes.img} src="../img/b5082895-48f6-4617-96d1-e716d1838a33.jpeg"/>
                <h2>Capucchino</h2>
                <h4>Gi??: 54.000VN??</h4>
              </Grid>


              <Grid item xs={8} style={{ width: '100%', paddingLeft: 40 }}>
                <h4>
                  Ly c?? ph?? s???a ?????m ???? th???i th?????ng! M???t ch??t ?????m ???? h??n so v???i Latte, Cappuccino c???a ch??ng t??i b???t ?????u
                  v???i c?? ph?? espresso, sau ???? th??m m???t l?????ng t????ng ??????ng gi???a s???a t????i v?? b???t s???a cho th???t h???p d???n. B???n
                  c?? th??? t??y th??ch l???a ch???n u???ng n??ng ho???c d??ng chung v???i ????.
                </h4>

                <div>
                  <BuyNow/>
                </div>
              </Grid>

            </Grid>
          </TabPanel>
          <Grid item sm={12} md={9}>

            <TabPanel value={value} index={1} alignItems="center">
              <Grid container>
                <Grid item xs={4} className={classes.gridItem} style={{ width: '80%' }}>
                  <img className={classes.img} src="../img/ee161100-8a6c-4be0-b865-ac4bf0da25e9.jpeg"/>
                  <h2>Latte</h2>
                  <h4>Gi??: 54,000 VN??</h4>
                </Grid>

                <Grid item xs={7} style={{ width: '100%', paddingLeft: 60 }}>
                  <h4>
                    Ly c?? ph?? s???a ng???t ng??o ?????n kh?? qu??n! V???i m???t ch??t nh??? nh??ng h??n so v???i Cappuccino, Latte c???a ch??ng
                    t??i b???t ?????u v???i c?? ph?? espresso, sau ???? th??m s???a t????i v?? b???t s???a m???t c??ch ?????y ngh??? thu???t. B???n c?? th???
                    t??y th??ch l???a ch???n u???ng n??ng ho???c d??ng chung v???i ????.
                  </h4>
                  <div>
                    <BuyNow/>
                  </div>
                </Grid>
              </Grid>
            </TabPanel>
          </Grid>

          <Grid item sm={12} md={9}>
            <TabPanel value={value} index={2} alignItems="center">
              <Grid container>
                <Grid item xs={5} className={classes.gridItem}>
                  <img className={classes.img} src="../img/notNeutral Vero Cortado Glass, 4_25oz - Smoke.png"/>
                  <h2>Espresso</h2>
                  <h4>Gi??: 54,000 VN??</h4>
                </Grid>

                <Grid item xs={7} style={{ width: '100%', paddingLeft: 60 }}>
                  <h4>
                    Ly c?? ph?? s???a ?????m ???? th???i th?????ng! M???t ch??t ?????m ???? h??n so v???i Latte, Cappuccino c???a ch??ng t??i b???t ?????u
                    v???i c?? ph?? espresso, sau ???? th??m m???t l?????ng t????ng ??????ng gi???a s???a t????i v?? b???t s???a cho th???t h???p d???n.
                    B???n c?? th??? t??y th??ch l???a ch???n u???ng n??ng ho???c d??ng chung v???i ????.
                  </h4>
                  <BuyNow/>
                </Grid>

              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
