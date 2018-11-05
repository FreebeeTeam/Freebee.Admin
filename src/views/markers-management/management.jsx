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

class MarkersManagement extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
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
        {value === 0 && <TabContainer><WifiTable /></TabContainer>}
        {value === 1 && <TabContainer><ToiletsTable /></TabContainer>}
        {value === 2 && <TabContainer>Chargers</TabContainer>}
      </div>
    );
  }
}

export default withStyles(styles)(MarkersManagement);
