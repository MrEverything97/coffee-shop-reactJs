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
            <Tab label="Cà Phê Sữa Đá" {...a11yProps(0)}  />
            <Tab label="Cà Phê Đen Đá" {...a11yProps(1)} />
            <Tab label="BẠC XỈU"{...a11yProps(2)} />
          </Tabs>
        </Grid>

        <Grid item sm={12} md={9}>
          <TabPanel value={value} index={0} alignItems="center">
            <Grid container>
              <Grid item xs={4} className={classes.gridItem} style={{ width: '40%' }}>
                <img className={classes.img} src="../img/c1143129-860e-4377-b7a4-d3d0bef3ced8.jpeg"/>
                <h2>Cà Phê Sữa Đá</h2>
                <h4>Giá: 29.000VNĐ</h4>
              </Grid>


              <Grid item xs={8} style={{ width: '100%', paddingLeft: 40 }}>
                <h4>Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo
                  giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống,
                  hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.</h4>
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
                <img className={classes.img} src="../img/6796fda6-4e8c-4cb4-ae50-9f5fb762e769 2.jpeg"/>
                <h2>Cà Phê Đen Đá</h2>
                <h4>Giá: 29,000 VNĐ</h4>
              </Grid>

              <Grid item xs={7} style={{ width: '100%', paddingLeft: 40 }}>
                <h4>
                  Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn độc đáo tại
                  Highlands. Cà phê đậm đà pha hoàn toàn từ Phin, cho thêm 1 thìa đường, một ít đá viên mát lạnh, tạo
                  nên Phin Đen Đá mang vị cà phê đậm đà chất Phin.
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
          <Grid item xs={4} className={classes.gridItem} style={{ width: '50%' }}>
            <img className={classes.img} src="../img/Beautiful Dream Life.jpeg"/>
            <h2>Bạc Xỉu</h2>
            <h4>Giá: 29,000 VNĐ</h4>
          </Grid>

          <Grid item xs={7} style={{ width: '100%', paddingLeft: 50 }}>
            <h4>
              Nếu Phin Sữa Đá dành cho các bạn đam mê vị đậm đà, thì Bạc Xỉu Đá là một sự lựa chọn nhẹ “đô" cà phê nhưng
              vẫn thơm ngon, chất lừ không kém!
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
