import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { thunks } from '../../../redux/markers';
import Dialog from './dialog';

import types from './types';

const defaultState = props => ({
  isOpen: props.isOpen || false,
  wifi: {
    title: null,
    location: null,
    description: null,
    author: null,
    address: null,
    password: null,
  },
});


class Container extends Component {
  state = defaultState(this.props);

  componentDidUpdate = (prevProps) => {
    if (!prevProps.isOpen) {
      this.setState(defaultState());
    }
  }

  componentWillReceiveProps = ({ isOpen }) => {
    this.setState({ isOpen });
  }


  handleChange = name => (e) => {
    const { type } = this.props;
    const { entityName } = types[type];

    const { [entityName]: entity } = this.state;
    entity[name] = e.target.value;

    this.setState({
      [entityName]: entity,
    });
  }

  handleClose = () => {
    const { close } = this.props;

    this.setState({ isOpen: false });
    close();
  };


  handleCoordinatesChange = (e) => {
    const { latlng: { lat, lng } } = e;
    const { type } = this.props;
    const { entityName } = types[type];

    const { [entityName]: entity } = this.state;
    entity.location = [lat, lng];

    this.setState({
      [entityName]: entity,
    });
  }

  handleSubmit = () => {
    const { type, createWifi, close } = this.props;
    const { entityName } = types[type];
    const { [entityName]: entity } = this.state;

    if (!entity.location) {
      alert('Необходимо установить маркер');
      return;
    }

    createWifi(entity);
    close();
  }

  render() {
    const { type } = this.props;
    const { entityName } = types[type];
    const { [entityName]: entity, isOpen } = this.state;

    return (
      <Dialog
        isOpen={isOpen}
        close={this.handleClose}
        entity={entity}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleCoordinatesChange={this.handleCoordinatesChange}
      />
    );
  }
}

const mapState = (state) => {
  return {
  };
};

const mapDispatch = (dispatch) => {
  const { wifiThunks: { createWifi } } = thunks;

  return bindActionCreators({
    createWifi,
  }, dispatch);
};

export default connect(mapState, mapDispatch)(Container);
