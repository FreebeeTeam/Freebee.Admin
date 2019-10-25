import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from './AddDialog';
import { markersThunks } from '../../../redux/markers';
import { getTableType } from '../helpers';

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
  toilet: {
    title: null,
    location: null,
    description: null,
    author: null,
    address: null,
  },
  socket: {
    title: null,
    location: null,
    description: null,
    author: null,
    address: null,
  },
  water: {
    title: null,
    location: null,
    description: null,
    author: null,
    address: null,
  },
});


class Container extends Component {
  state = defaultState(this.props);

  componentDidUpdate = (prevProps) => {
    if (!prevProps.isOpen) {
      this.setState(defaultState());
    }
  };

  componentWillReceiveProps = ({ isOpen }) => {
    this.setState({ isOpen });
  };

  handleChange = name => (e) => {
    const { type } = this.props;
    const { entityName } = getTableType(type);

    const { [entityName]: entity } = this.state;
    entity[name] = e.target.value;

    this.setState({
      [entityName]: entity,
    });
  };

  handleClose = () => {
    const { close } = this.props;

    this.setState({ isOpen: false });
    close();
  };

  handleCoordinatesChange = (e) => {
    const { latlng: { lat, lng } } = e;
    const { type } = this.props;
    const { entityName } = getTableType(type);

    const { [entityName]: entity } = this.state;
    entity.location = [lat, lng];

    this.setState({
      [entityName]: entity,
    });
  };

  handleSubmit = () => {
    const { type, close } = this.props;
    const { entityName, createFunc } = getTableType(type);
    const { [entityName]: entity } = this.state;
    const { [createFunc]: create } = this.props;

    if (!entity.location) {
      alert('Необходимо установить маркер');
      return;
    }

    create(entity);
    close();
  };

  render() {
    const { type } = this.props;
    const { entityName } = getTableType(type);
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

const {
  wifiThunks: { createWifi },
  toiletsThunks: { createToilet },
  socketsThunks: { createSocket },
  waterThunks: { createWater },
} = markersThunks;

const mapDispatch = {
  createWifi,
  createToilet,
  createSocket,
  createWater,
};

export default connect(null, mapDispatch)(Container);
