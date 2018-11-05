import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { thunks, selectors } from '../../redux/markers';
import Management from './management';

class Container extends Component {
  state = {
    value: 0,
  };

  componentDidMount = () => {
    const { getMarkers } = this.props;

    getMarkers();
  }

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { wifi, toilets } = this.props;
    console.log('markers')
    console.log(wifi)
    console.log(toilets)

    return (
      <Management
        wifi={wifi}
        toilets={toilets}
        value={value}
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
