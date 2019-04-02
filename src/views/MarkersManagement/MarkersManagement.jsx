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
import TabContainer from './TabContainer';

import AddDialog from './AddDialog';
import EditDialog from './EditDialog';

import ToiletsTable from './ToiletsTable';
import WifiTable from './WifiTable';
import SocketsTable from './SocketsTable';

import { MODAL_TYPES, TABLE_TYPES } from './const';

import styles from './styles';

const MarkersManagement = ({
  classes,
  wifi, toilets, sockets,
  tableType, handleTabChange,
  openAddModal, openEditModal, resetModal, modalType,
  deleteEntities,
}) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={tableType}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label={TABLE_TYPES.wifi.label} icon={<WifiIcon />} />
          <Tab label={TABLE_TYPES.toilets.label} icon={<ToiletIcon />} />
          <Tab label={TABLE_TYPES.sockets.label} icon={<BatteryIcon />} />
        </Tabs>
      </AppBar>
      {/* MODALS */}
      {modalType === MODAL_TYPES.add.value
        && (
        <AddDialog
          isOpen={modalType === MODAL_TYPES.add.value}
          close={resetModal}
          type={tableType}
        />
        )
      }

      {modalType === MODAL_TYPES.edit.value && (
        <EditDialog
          isOpen={modalType === MODAL_TYPES.edit.value}
          close={resetModal}
          type={tableType}
        />
      )}

      {/* TABS */}
      {tableType === TABLE_TYPES.wifi.value && (
      <TabContainer>
        <WifiTable
          openAddModal={openAddModal}
          openEditModal={openEditModal}
          deleteEntities={deleteEntities}
          title={TABLE_TYPES.wifi.label}
          data={wifi}
        />
      </TabContainer>
      )}

      {tableType === TABLE_TYPES.toilets.value && (
      <TabContainer>
        <ToiletsTable
          openAddModal={openAddModal}
          openEditModal={openEditModal}
          deleteEntities={deleteEntities}
          title={TABLE_TYPES.toilets.label}
          data={toilets}
        />
      </TabContainer>
      )}

      {tableType === TABLE_TYPES.sockets.value && (
      <TabContainer>
        <SocketsTable
          openAddModal={openAddModal}
          openEditModal={openEditModal}
          deleteEntities={deleteEntities}
          title={TABLE_TYPES.sockets.label}
          data={sockets}
        />
      </TabContainer>
      )}
    </div>
  );
};

export default withStyles(styles)(MarkersManagement);
