import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { thunks, selectors } from '../../redux/markers';
import { getMarkersIdsByIndexes } from './helpers';
import Management from './management';

class Container extends Component {
  state = {
    tableType: 0,
    modalType: null,
  };

  openModal = type => () => {
    this.setState({ modalType: type });
  }

  resetModal = () => {
    this.setState({ modalType: null });
  }

  componentDidMount = () => {
    const { getMarkers } = this.props;

    getMarkers();
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
        openModal={this.openModal}
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

  return bindActionCreators({
    getMarkers,
    removeToilets,
    removeWifi,
  }, dispatch);
};

export default connect(mapState, mapDispatch)(Container);
