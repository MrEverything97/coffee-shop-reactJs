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
        <Box p={5}>
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
            <Tab label="CARAMEL PHIN FREEZE" {...a11yProps(0)}  />
            <Tab label="CLASSIC PHIN FREEZE" {...a11yProps(1)} />
          </Tabs>
        </Grid>

        <Grid item sm={12} md={9}>
          <TabPanel value={value} index={0} alignItems="center">
            <Grid container>
              <Grid item xs={3} className={classes.gridItem} style={{ width: '30%' }}>
                <img className={classes.img} src="../img/Smoked Iced Caramel Macchiato.png"/>
                <h2>Caramel Phin Freeze</h2>
                <h4>Giá: 49.000VNĐ</h4>
              </Grid>


              <Grid item xs={8} style={{ width: '100%', paddingLeft: 60 }}>
                <h4>
                  Thơm ngon khó cưỡng! Được kết hợp từ cà phê truyền thống chỉ có tại House Coffee, cùng với
                  caramel, thạch cà phê và đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và caramel ngọt ngào. Món
                  nước phù hợp trong những cuộc gặp gỡ bạn bè, bởi sự ngọt ngào thường mang mọi người xích lại gần nhau.

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
                <Grid item xs={5} className={classes.gridItem} style={{ width: '50%' }}>
                  <img className={classes.img} src="../img/Healthy Homemade Frappuccino.jpeg"/>
                  <h2>Classic Phin Frezze</h2>
                  <h4>Giá: 49,000 VNĐ</h4>
                </Grid>

                <Grid item xs={7} style={{ width: '100%', paddingLeft: 40 }}>
                  <h4>
                    Thơm ngon đậm đà! Được kết hợp từ cà phê pha Phin truyền thống chỉ có tại Highlands Coffee, cùng với
                    thạch cà phê và đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và bột ca cao đậm đà. Món nước
                    hoàn hảo để khởi đầu câu chuyện cùng bạn bè.
                  </h4>
                  <div>
                    <BuyNow/>
                  </div>
                </Grid>
              </Grid>
            </TabPanel>
          </Grid>

        </Grid>
      </Grid>
    </div>

  );
}
