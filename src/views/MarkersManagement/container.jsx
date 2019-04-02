import React, { Component } from 'react';
import { connect } from 'react-redux';
import Management from './MarkersManagement';
import { thunks, selectors, actions } from '../../redux/markers';
import { getIdsByIndexes } from '../../lib/tableHelpers';

import { MODAL_TYPES, TABLE_TYPES } from './const';

class Container extends Component {
  state = {
    tableType: TABLE_TYPES.wifi.value,
    modalType: null,
  };

  componentDidMount() {
    const { getMarkers } = this.props;

    getMarkers();
  }

  openAddModal = () => {
    this.setState({ modalType: MODAL_TYPES.add.value });
  };

  openEditModal = id => () => {
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

  deleteEntities = (indexesToDelete) => {
    const { tableType } = this.state;
    const {
      rawWifi,
      removeWifi,

      rawToilets,
      removeToilets,

      rawSockets,
      removeSockets,
    } = this.props;

    switch (tableType) {
      case TABLE_TYPES.wifi.value: {
        const ids = getIdsByIndexes(indexesToDelete, rawWifi);
        removeWifi(ids);
        break;
      }
      case TABLE_TYPES.toilets.value: {
        const ids = getIdsByIndexes(indexesToDelete, rawToilets);
        removeToilets(ids);
        break;
      }
      case TABLE_TYPES.sockets.value: {
        const ids = getIdsByIndexes(indexesToDelete, rawSockets);
        removeSockets(ids);
        break;
      }
      default:
        break;
    }
  };

  render() {
    const { tableType, modalType } = this.state;
    const { wifi, toilets, sockets } = this.props;

    return (
      <Management
        openAddModal={this.openAddModal}
        openEditModal={this.openEditModal}
        resetModal={this.resetModal}

        deleteEntities={this.deleteEntities}

        modalType={modalType}
        tableType={tableType}
        handleTabChange={this.handleTabChange}

        wifi={wifi}
        toilets={toilets}
        sockets={sockets}
      />
    );
  }
}

const mapState = (state) => {
  const { selectWifiAsArray, selectToiletsAsArray, selectSocketsAsArray } = selectors;

  return {
    rawWifi: state.markers.wifi.list,
    wifi: selectWifiAsArray(state),

    rawToilets: state.markers.toilets.list,
    toilets: selectToiletsAsArray(state),

    rawSockets: state.markers.sockets.list,
    sockets: selectSocketsAsArray(state),
  };
};

const {
  getMarkers,
  wifiThunks: { removeWifi },
  toiletsThunks: { removeToilets },
  socketsThunks: { removeSockets },
} = thunks;

const { setMarkerIdToEdit } = actions;

const mapDispatch = {
  getMarkers,

  removeWifi,
  removeToilets,
  removeSockets,

  setMarkerIdToEdit,
};

export default connect(mapState, mapDispatch)(Container);
