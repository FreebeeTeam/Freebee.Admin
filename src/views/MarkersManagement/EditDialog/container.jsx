import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from './EditDialog';
import { markersSelectors, markersThunks } from '../../../redux/markers';
import { getTableType } from '../helpers';

const defaultState = (props) => {
  const { entityName } = getTableType(props.type);

  return {
    isOpen: props.isOpen || false,
    [entityName]: props.entityToEdit,
  };
};


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
    const { entityName, editFunc } = getTableType(type);
    const { [entityName]: entity } = this.state;
    const { [editFunc]: edit } = this.props;

    if (!entity.location) {
      alert('Необходимо установить маркер');
      return;
    }

    edit(entity);
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

const mapState = (state, props) => {
  const { selectedToEditEntityFactory } = markersSelectors;
  const { type } = props;
  const { storeName } = getTableType(type);

  const selectSelectedToEditEntity = selectedToEditEntityFactory(storeName);

  return {
    entityToEdit: selectSelectedToEditEntity(state),
  };
};

const {
  wifiThunks: { editWifi },
  toiletsThunks: { editToilet },
  socketsThunks: { editSocket },
  waterThunks: { editWater },
} = markersThunks;

const mapDispatch = {
  editWifi,
  editToilet,
  editSocket,
  editWater,
};

export default connect(mapState, mapDispatch)(Container);
