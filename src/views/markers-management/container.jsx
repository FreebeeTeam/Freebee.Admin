import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { thunks, selectors, actions } from '../../redux/markers';
import { getMarkersIdsByIndexes } from './helpers';
import Management from './management';

class Container extends Component {
  state = {
    tableType: 0,
    modalType: null,
  };

  componentDidMount = () => {
    const { getMarkers } = this.props;

    getMarkers();
  }

  openAddModal = () => {
    this.setState({ modalType: 'add' });
  }

  openEditModal = id => () => {
    const { setMarkerIdToEdit } = this.props;
    this.setState({ modalType: 'edit' });

    setMarkerIdToEdit(id);
  }

  resetModal = () => {
    this.setState({ modalType: null });
  }

  handleTabChange = (event, value) => {
    this.setState({ tableType: value });
  };

  deleteEntities = (indexesToDelete) => {
    const { tableType } = this.state;
    const {
      removeWifi,
      removeToilets,
      rawWifi,
      rawToilets,
    } = this.props;

    switch (tableType) {
      case 0: {
        const ids = getMarkersIdsByIndexes(indexesToDelete, rawWifi);
        removeWifi(ids);
        break;
      }
      case 1: {
        const ids = getMarkersIdsByIndexes(indexesToDelete, rawToilets);
        removeToilets(ids);
        break;
      }
      default:
        break;
    }
  }

  render() {
    const { tableType, modalType } = this.state;
    const { wifi, toilets } = this.props;

    return (
      <Management
        openAddModal={this.openAddModal}
        openEditModal={this.openEditModal}
        resetModal={this.resetModal}
        deleteEntities={this.deleteEntities}
        modalType={modalType}
        tableType={tableType}
        wifi={wifi}
        toilets={toilets}
        handleTabChange={this.handleTabChange}
      />
    );
  }
}

const mapState = (state) => {
  const { selectWifiAsArray, selectToiletsAsArray } = selectors;

  return {
    rawWifi: state.markers.wifi.list,
    wifi: selectWifiAsArray(state),
    rawToilets: state.markers.toilets.list,
    toilets: selectToiletsAsArray(state),
  };
};

const mapDispatch = (dispatch) => {
  const {
    getMarkers,
    toiletsThunks: { removeToilets },
    wifiThunks: { removeWifi },
  } = thunks;
  const { setMarkerIdToEdit } = actions;

  return bindActionCreators({
    getMarkers,
    removeToilets,
    removeWifi,
    setMarkerIdToEdit,
  }, dispatch);
};

export default connect(mapState, mapDispatch)(Container);
