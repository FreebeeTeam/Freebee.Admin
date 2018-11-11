import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { thunks, selectors } from '../../../redux/markers';
import Dialog from './dialog';

import types from './types';

const defaultState = props => ({
  isOpen: props.isOpen || false,
  [types[props.type].entityName]: props.entityToEdit,
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
    const { type, close } = this.props;
    const { entityName, editFunc } = types[type];
    const { [entityName]: entity } = this.state;
    const { [editFunc]: edit } = this.props;

    if (!entity.location) {
      alert('Необходимо установить маркер');
      return;
    }

    edit(entity);
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

const mapState = (state, props) => {
  const { selectedToEditEntityFactory } = selectors;
  const { type } = props;
  const { storeName } = types[type];

  const selectSelectedToEditEntity = selectedToEditEntityFactory(storeName);

  return {
    entityToEdit: selectSelectedToEditEntity(state),
  };
};

const mapDispatch = (dispatch) => {
  const {
    wifiThunks: { editWifi },
    toiletsThunks: { editToilet },
  } = thunks;

  return bindActionCreators({
    editWifi,
    editToilet,
  }, dispatch);
};

export default connect(mapState, mapDispatch)(Container);
