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
            <Tab label="TRÀ ĐÀO CAM SẢ" {...a11yProps(0)}  />
            <Tab label="TRÀ VẢI" {...a11yProps(1)} />
          </Tabs>
        </Grid>

        <Grid item sm={12} md={9}>
          <TabPanel value={value} index={0} alignItems="center">
            <Grid container>
              <Grid item xs={4} className={classes.gridItem} style={{ width: '30%' }}>
                <img className={classes.img} src="../img/TRÀ ĐÀO CAM SẢ.png"/>
                <h2>Trà Đào Cam Sả</h2>
                <h4>Giá: 39.000VNĐ</h4>
              </Grid>


              <Grid item xs={8} style={{ width: '100%', paddingLeft: 60 }}>
                <h4>
                  Vị thanh ngọt của đào Hy Lạp, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới
                  mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức
                  uống này. Sản phẩm hiện có 2 phiên bản Nóng và Lạnh phù hợp cho mọi thời gian trong năm.
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
                <Grid item xs={6} className={classes.gridItem} style={{ width: '100%' }}>
                  <img className={classes.img} src="../img/Cách làm Trà Vải Túi Lọc mát lạnh, giải nhiệt mùa….jpeg"/>
                  <h2>Trà Vải</h2>
                  <h4>Giá: 39,000 VNĐ</h4>
                </Grid>

                <Grid item xs={6} style={{ width: '100%', paddingLeft: 60 }}>
                  <h4>
                    Vị thanh ngọt của vải Hy lạp,vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng
                    đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này. Sản phẩm hiện có 2 phiên
                    bản Nóng và Lạnh phù hợp cho mọi thời gian trong năm.
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
