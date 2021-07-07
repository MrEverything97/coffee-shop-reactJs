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
            <Tab label="SINH TỐ CAM XOÀI" {...a11yProps(0)}  />
            <Tab label="SINH TỐ VIỆT QUẤT" {...a11yProps(1)} />
          </Tabs>
        </Grid>

        <Grid item sm={12} md={9}>
          <TabPanel value={value} index={0} alignItems="center">
            <Grid container>
              <Grid item xs={4} className={classes.gridItem} style={{ width: '100%' }}>
                <img className={classes.img} src="../img/sinh_to_cam_xoai_c3cfa1beec0d4e49b0b229104cbfe412_large.webp"/>
                <h2>Sinh Tố Cam Xoài</h2>
                <h4>Giá: 49.000VNĐ </h4>
              </Grid>


              <Grid item xs={8} style={{ width: '100%', paddingLeft: 60 }}>
                <h4>
                  Vị mứt cam xoài hòa trộn độc đáo với sữa chua, cho cảm giác chua ngọt rất sướng. Điểm nhấn là những
                  mẩu bánh cookie giòn tan giúp sự thưởng thức thêm thú vị. </h4>

                <div>
                  <BuyNow/>
                </div>
              </Grid>

            </Grid>
          </TabPanel>
          <Grid item sm={12} md={9}>

            <TabPanel value={value} index={1} alignItems="center">
              <Grid container>
                <Grid item xs={6} className={classes.gridItem} style={{ width: '100%' }}>
                  <img className={classes.img} src="../img/sinh-to-viet-quoc_bd95abd5bf84451e8ee0c8cef031432c.jpg"/>
                  <h2>Sinh Tố Việt Quất</h2>
                  <h4>Giá: 49,000 VNĐ</h4>
                </Grid>

                <Grid item xs={6} className={classes.gridItem} style={{ width: '100%', paddingLeft: 60 }}>
                  <h4>
                    Mứt Việt Quất chua thanh, ngòn ngọt, phối hợp nhịp nhàng với dòng sữa chua bổ dưỡng. Là món sinh tố
                    thơm ngon mà cả đầu lưỡi và làn da đều thích. </h4>
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
