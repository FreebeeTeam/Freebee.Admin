import React from 'react';
import { connect } from 'react-redux';
import { waterThunks, waterSelectors } from 'redux/markers/water';
import _ from 'lodash';
import Dialog from './WaterDialog';

function WaterDialogContainer({
  isOpen,
  onClose, editWater, createWater, water,
}) {
  const handleSubmit = (entity) => {
    if (entity.id) {
      editWater(entity);
    } else {
      createWater(entity);
    }
    onClose();
  };

  const key = _.get(water, 'id', null);

  return (
    <Dialog
      key={key}
      isOpen={isOpen}
      title={key ? 'Edit water' : 'Add water'}
      water={water}
      onSubmit={handleSubmit}
      onReset={onClose}
      onClose={onClose}
    />
  );
}

const mapState = (state) => {
  const water = waterSelectors.selectWaterToEdit(state);

  return {
    water,
  };
};

const { createWater, editWater } = waterThunks;
const mapDispatch = {
  editWater,
  createWater,
};

export default connect(mapState, mapDispatch)(WaterDialogContainer);
