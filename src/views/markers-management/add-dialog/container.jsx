import React, { Component } from 'react';
import Dialog from './dialog';

import types from './types';

const defaultState = {
  wifi: {
    title: null,
    location: null,
    description: null,
    author: null,
    address: null,
    password: null,
  },
};


export default class Container extends Component {
  state = defaultState;

  handleChange = name => (e) => {
    const { type } = this.props;
    const { entityName } = types[type];

    const { [entityName]: entity } = this.state;
    entity[name] = e.target.value;

    this.setState({
      [entityName]: entity,
    });
  }

  handleCoordinatesChange = (e) => {
    console.log('change')
    console.log(e)
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
    const { type } = this.props;
    const { entityName } = types[type];
    const { [entityName]: entity } = this.state;

    console.log('submit');
    console.log(entity);
    console.log(this.state);
  }

  render() {
    const { isOpen, type, close } = this.props;
    const { entityName } = types[type];
    const { [entityName]: entity } = this.state;

    return (
      <Dialog
        isOpen={isOpen}
        close={close}
        entity={entity}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleCoordinatesChange={this.handleCoordinatesChange}
      />
    );
  }
}
