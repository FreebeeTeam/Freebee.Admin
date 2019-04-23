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
import {
  Link, Switch, Route, Redirect,
} from 'react-router-dom';
import TabContainer from './TabContainer';
import { routes } from '../../routes'

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
  tableType, onTabChange,
  openAddModal, openEditModal, resetModal, modalType,
  deleteEntities,
  match, location,
}) => {
  return (
    <div className={classes.root}>

      <AppBar position="static" color="default">
        <Tabs
          value={tableType}
          onChange={onTabChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            label={TABLE_TYPES.wifi.label}
            icon={<WifiIcon />}
            component={Link}
            to={`${match.url}${routes.wifi()}`}
          />
          <Tab
            label={TABLE_TYPES.toilets.label}
            icon={<ToiletIcon />}
            component={Link}
            to={`${match.url}${routes.toilets()}`}
          />
          <Tab
            label={TABLE_TYPES.sockets.label}
            icon={<BatteryIcon />}
            component={Link}
            to={`${match.url}${routes.sockets()}`}
          />
        </Tabs>
      </AppBar>

      <Switch location={location}>
        <Route
          exact
          path={`${match.path}`}
          render={({ match }) => {
            return <Redirect to={`${match.path}${routes.wifi()}`} />;
          }}
        />
        <Route
          path={`${match.path}${routes.wifi()}`}
          render={() => {
            return (
              <TabContainer>
                <WifiTable
                  openAddModal={openAddModal}
                  openEditModal={openEditModal}
                  deleteEntities={deleteEntities}
                  title={TABLE_TYPES.wifi.label}
                  data={wifi}
                />
              </TabContainer>
            );
          }}
        />
        <Route
          path={`${match.path}${routes.toilets()}`}
          render={() => {
            return (
              <TabContainer>
                <ToiletsTable
                  openAddModal={openAddModal}
                  openEditModal={openEditModal}
                  deleteEntities={deleteEntities}
                  title={TABLE_TYPES.toilets.label}
                  data={toilets}
                />
              </TabContainer>
            );
          }}
        />
        <Route
          path={`${match.path}${routes.sockets()}`}
          render={() => {
            return (
              <TabContainer>
                <SocketsTable
                  openAddModal={openAddModal}
                  openEditModal={openEditModal}
                  deleteEntities={deleteEntities}
                  title={TABLE_TYPES.sockets.label}
                  data={sockets}
                />
              </TabContainer>
            );
          }}
        />
      </Switch>

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

    </div>
  );
};

export default withStyles(styles)(MarkersManagement);
