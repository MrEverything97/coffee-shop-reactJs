import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Coffee from './Coffee';
import Frezee from './Frezee';
import Tea from './Tea';
import Smothie from './Smothie';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MenuContent() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{ backgroundColor: '#bdbdbd' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Coffee"/>
          <Tab label="Frezee"/>
          <Tab label="Trà"/>
          <Tab label="Sinh Tố"/>
          {/*<Tab label="Bánh Ngọt"/>*/}
          {/*<Tab label="Ưu đãi"/>*/}

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {/*<Button variant="contained" color='black'>*/}
        {/*  Cà Phê Phin*/}
        {/*</Button>*/}
        <Coffee/>
        {/*<Button variant="contained" color='black'>*/}
        {/*  Cà Phê Espresso*/}
        {/*</Button>*/}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Frezee/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Tea/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Smothie/>
      </TabPanel>

    </div>
  );
}
