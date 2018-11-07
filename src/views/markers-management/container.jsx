import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { thunks, selectors } from '../../redux/markers';
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

  render() {
    const { tableType, modalType } = this.state;
    const { wifi, toilets } = this.props;

    return (
      <Management
        openModal={this.openModal}
        resetModal={this.resetModal}
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
    wifi: selectWifiAsArray(state),
    toilets: selectToiletsAsArray(state),
  };
};

const mapDispatch = (dispatch) => {
  const { getMarkers } = thunks;

  return bindActionCreators({
    getMarkers,
  }, dispatch);
};

export default connect(mapState, mapDispatch)(Container);
