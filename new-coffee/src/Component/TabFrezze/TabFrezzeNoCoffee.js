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
            <Tab label="FREEZE TRÀ XANH" {...a11yProps(0)}  />
            <Tab label="FREEZE SÔ-CÔ-LA" {...a11yProps(1)} />
          </Tabs>
        </Grid>

        <Grid item sm={12} md={9}>
          <TabPanel value={value} index={0} alignItems="center">
            <Grid container>
              <Grid item xs={4} className={classes.gridItem} style={{ width: '20%' }}>
                <img className={classes.img} src="../img/𝐁𝐄𝐕𝐄𝐑𝐋𝐘.jpeg"/>
                <h2>Freeze Trà Xanh</h2>
                <h4>Giá: 49.000VNĐ</h4>
              </Grid>


              <Grid item xs={8} style={{ width: '100%', paddingLeft: 50 }}>
                <h4>
                  Thức uống rất được ưa chuộng! Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch
                  trà dai dai, thơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. Freeze Trà Xanh thơm ngon, mát
                  lạnh, chinh phục bất cứ ai!
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
                  <img className={classes.img} src="../img/Homepage.jpeg"/>
                  <h2>Frezze Sô-Cô-La</h2>
                  <h4>Giá: 49,000 VNĐ</h4>
                </Grid>

                <Grid item xs={7} style={{ width: '100%', paddingLeft: 60 }}>
                  <h4>
                    Thiên đường đá xay sô cô la! Từ những thanh sô cô la Việt Nam chất lượng được đem xay với đá cho đến
                    khi mềm mịn, sau đó thêm vào thạch sô cô la dai giòn, ở trên được phủ một lớp kem whip beo béo và
                    sốt sô cô la ngọt ngào. Tạo thành Freeze Sô-cô-la ngon mê mẩn chinh phục bất kì ai! </h4>
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
