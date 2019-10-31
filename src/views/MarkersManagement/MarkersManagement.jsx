import React from 'react';
import {
  AppBar, Tab, Tabs,
} from '@material-ui/core';
import {
  BatteryCharging20 as BatteryIcon,
  Waves as WaterIcon,
  Wc as ToiletIcon,
  Wifi as WifiIcon,
} from '@material-ui/icons';
import {
  Link, Redirect, Route, Switch,
} from 'react-router-dom';
import routes from 'routes';
import { WifiTable, WifiDialog } from './Wifi';
import { ToiletsTable, ToiletsDialog } from './Toilets';
import { SocketsTable, SocketsDialog } from './Sockets';
import { WaterTable, WaterDialog } from './Water';
import { MODAL_TYPES, TABLE_TYPES } from './const';
import useStyles from './styles';

const MarkersManagement = ({
  wifi, toilets, sockets, water,
  getWifi, getToilets, getSockets, getWater,
  tableType, onTabChange,
  openAddModal, openEditModal, resetModal, modalType,
  deleteEntities,
  match, location,
}) => {
  const classes = useStyles();
  const isModalOpen = modalType === MODAL_TYPES.edit.value || modalType === MODAL_TYPES.add.value;
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
          <Tab
            label={TABLE_TYPES.water.label}
            icon={<WaterIcon />}
            component={Link}
            to={`${match.url}${routes.water()}`}
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
              <>
                <WifiTable
                  data={wifi}
                  loadData={getWifi}
                  onAddClick={openAddModal}
                  onActionButtonClick={openEditModal}
                  deleteEntities={deleteEntities}
                />
                {isModalOpen
                  && (
                  <WifiDialog
                    isOpen={isModalOpen}
                    onClose={resetModal}
                  />
                  )}
              </>
            );
          }}
        />
        <Route
          path={`${match.path}${routes.toilets()}`}
          render={() => {
            return (
              <>
                <ToiletsTable
                  data={toilets}
                  loadData={getToilets}
                  onAddClick={openAddModal}
                  onActionButtonClick={openEditModal}
                  deleteEntities={deleteEntities}
                />
                {isModalOpen
                && (
                  <ToiletsDialog
                    isOpen={isModalOpen}
                    onClose={resetModal}
                  />
                )}
              </>
            );
          }}
        />
        <Route
          path={`${match.path}${routes.sockets()}`}
          render={() => {
            return (
              <>
                <SocketsTable
                  data={sockets}
                  loadData={getSockets}
                  onAddClick={openAddModal}
                  onActionButtonClick={openEditModal}
                  deleteEntities={deleteEntities}
                />
                {isModalOpen
                && (
                  <SocketsDialog
                    isOpen={isModalOpen}
                    onClose={resetModal}
                  />
                )}
              </>
            );
          }}
        />
        <Route
          path={`${match.path}${routes.water()}`}
          render={() => {
            return (
              <>
                <WaterTable
                  data={water}
                  loadData={getWater}
                  onAddClick={openAddModal}
                  onActionButtonClick={openEditModal}
                  deleteEntities={deleteEntities}
                />
                {isModalOpen
                && (
                  <WaterDialog
                    isOpen={isModalOpen}
                    onClose={resetModal}
                  />
                )}
              </>
            );
          }}
        />
      </Switch>

    </div>
  );
};

export default MarkersManagement;
