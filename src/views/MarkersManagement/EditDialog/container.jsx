import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { thunks, selectors } from '../../../redux/markers';
import Dialog from './EditDialog';

import types from './types';

const defaultState = props => ({
  isOpen: props.isOpen || false,
  [types[props.type].entityName]: props.entityToEdit,
});


class Container extends Component {
  state = defaultState(this.props);

  componentWillReceiveProps({ isOpen }) {
    this.setState({ isOpen });
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen) {
      this.setState(defaultState());
    }
  }

  handleChange = name => (e) => {
    const { type } = this.props;
    const { entityName } = types[type];

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
    const { entityName } = types[type];

    const { [entityName]: entity } = this.state;
    entity.location = [lat, lng];

    this.setState({
      [entityName]: entity,
    });
  };

  handleSubmit = () => {
    const { type, close } = this.props;
    const { entityName, editFunc } = types[type];
    const { [entityName]: entity } = this.state;
    const { [editFunc]: edit } = this.props;

    if (!entity.location) {
      alert('Необходимо установить маркер');
      return;
    }

    console.log('entity')
    console.log(entity)

    edit(entity);
    close();
  };

  render() {
    const { type } = this.props;
    const { entityName } = types[type];
    const { [entityName]: entity, isOpen } = this.state;

    console.log('entity')
    console.log(entity)

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
