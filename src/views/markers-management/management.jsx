import React from 'react';
import {
  withStyles,
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';
import {
  Wifi as WifiIcon,
  Wc as ToiletIcon,
  BatteryCharging20 as BatteryIcon,
} from '@material-ui/icons';
import TabContainer from './tab-container';

import ToiletsTable from './toilets-table';
import WifiTable from './wifi-table';

import styles from './styles';

const MarkersManagement = ({
  wifi,
  toilets,
  classes,
  value,
  handleTabChange,
}) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleTabChange}
          scrollable
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Wifi" icon={<WifiIcon />} />
          <Tab label="Toilets" icon={<ToiletIcon />} />
          <Tab label="Chargers" icon={<BatteryIcon />} />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><WifiTable data={wifi} /></TabContainer>}
      {value === 1 && <TabContainer><ToiletsTable data={toilets} /></TabContainer>}
      {value === 2 && <TabContainer>Chargers</TabContainer>}
    </div>
  );
};

export default withStyles(styles)(MarkersManagement);
