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

import AddDialog from './add-dialog';
import EditDialog from './edit-dialog';

import ToiletsTable from './toilets-table';
import WifiTable from './wifi-table';

import styles from './styles';

const MarkersManagement = ({
  wifi,
  toilets,
  classes,
  tableType,
  handleTabChange,
  openAddModal,
  openEditModal,
  resetModal,
  modalType,
  deleteEntities,
}) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={tableType}
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
      {/* MODALS */}
      {modalType === 'add'
        && (
        <AddDialog
          isOpen={modalType === 'add'}
          close={resetModal}
          type={tableType}
        />)
      }
      {modalType === 'edit' && (
        <EditDialog
          isOpen={modalType === 'edit'}
          close={resetModal}
          type={tableType}
        />)

      }

      {/* TABS */}
      {tableType === 0
      && (
      <TabContainer>
        <WifiTable
          openAddModal={openAddModal}
          openEditModal={openEditModal}
          deleteEntities={deleteEntities}
          data={wifi}
        />
      </TabContainer>
      )}

      {tableType === 1 && (
      <TabContainer>
        <ToiletsTable
          openAddModal={openAddModal}
          openEditModal={openEditModal}
          deleteEntities={deleteEntities}
          data={toilets}
        />
      </TabContainer>
      )}

      {tableType === 2
      && (
      <TabContainer>
        {'Chargers'}
      </TabContainer>
      )}
    </div>
  );
};

export default withStyles(styles)(MarkersManagement);
