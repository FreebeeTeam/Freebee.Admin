import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { markersActions, markersSelectors, markersThunks } from 'redux/markers';
import Management from './MarkersManagement';
import { getTableObjectFromPathname } from './helpers';
import { MODAL_TYPES, TABLE_TYPES } from './const';

class MarkersManagementContainer extends Component {
  state = {
    tableType: TABLE_TYPES.wifi.value,
    modalType: null,
  };

  componentDidMount() {
    const { location: { pathname } } = this.props;

    const tableObject = getTableObjectFromPathname(pathname);
    if (!tableObject) {
      return;
    }

    this.setState({
      tableType: tableObject.value,
    });
  }

  componentDidUpdate(prevProps) {
    const { location: { pathname } } = this.props;

    if (prevProps.location.pathname !== pathname) {
      const tableObject = getTableObjectFromPathname(pathname);
      if (!tableObject) return;
      this.setState({
        tableType: tableObject.value,
      });
    }
  }

  openAddModal = () => {
    this.setState({ modalType: MODAL_TYPES.add.value });
  };

  openEditModal = (id) => {
    const { setMarkerIdToEdit } = this.props;
    this.setState({ modalType: MODAL_TYPES.edit.value });

    setMarkerIdToEdit(id);
  };

  resetModal = () => {
    this.setState({ modalType: null });
  };

  handleTabChange = (event, value) => {
    this.setState({ tableType: value });
  };

  deleteEntities = (ids) => {
    const { tableType } = this.state;
    const {
      removeWifi,
      removeToilets,
      removeSockets,
      removeWater,
    } = this.props;

    switch (tableType) {
      case TABLE_TYPES.wifi.value: {
        removeWifi(ids);
        break;
      }
      case TABLE_TYPES.toilets.value: {
        removeToilets(ids);
        break;
      }
      case TABLE_TYPES.sockets.value: {
        removeSockets(ids);
        break;
      }
      case TABLE_TYPES.water.value: {
        removeWater(ids);
        break;
      }
      default:
        break;
    }
  };

  render() {
    const { tableType, modalType } = this.state;
    const {
      wifi, toilets, sockets, water,
      match, location,
      getWifi, getToilets, getSockets, getWater,
    } = this.props;

    return (
      <Management
        openAddModal={this.openAddModal}
        openEditModal={this.openEditModal}
        resetModal={this.resetModal}

        deleteEntities={this.deleteEntities}

        modalType={modalType}
        tableType={tableType}
        onTabChange={this.handleTabChange}

        wifi={wifi}
        toilets={toilets}
        sockets={sockets}
        water={water}

        getWifi={getWifi}
        getToilets={getToilets}
        getSockets={getSockets}
        getWater={getWater}

        match={match}
        location={location}
      />
    );
  }
}

const mapState = (state) => {
  const {
    selectWifiAsArray, selectToiletsAsArray,
    selectSocketsAsArray, selectWaterAsArray,
  } = markersSelectors;

  return {
    wifi: selectWifiAsArray(state),
    toilets: selectToiletsAsArray(state),
    sockets: selectSocketsAsArray(state),
    water: selectWaterAsArray(state),
  };
};

const {
  wifiThunks: {
    getWifi,
    removeWifi,
  },
  toiletsThunks: {
    getToilets,
    removeToilets,
  },
  socketsThunks: {
    getSockets,
    removeSockets,
  },
  waterThunks: {
    getWater,
    removeWater,
  },
} = markersThunks;

const { setMarkerIdToEdit } = markersActions;

const mapDispatch = {
  getWifi,
  removeWifi,

  getToilets,
  removeToilets,

  getSockets,
  removeSockets,

  getWater,
  removeWater,

  setMarkerIdToEdit,
};

export default withRouter(connect(mapState, mapDispatch)(MarkersManagementContainer));
