import React from 'react';
import { connect } from 'react-redux';
import { toiletsThunks, toiletsSelectors } from 'redux/markers/toilets';
import _ from 'lodash';
import Dialog from './ToiletsDialog';

function ToiletsDialogContainer({
  isOpen,
  onClose, editToilet, createToilet, toilet,
}) {
  const handleSubmit = (entity) => {
    if (entity.id) {
      editToilet(entity);
    } else {
      createToilet(entity);
    }
    onClose();
  };

  const key = _.get(toilet, 'id', null);

  return (
    <Dialog
      key={key}
      isOpen={isOpen}
      title={key ? 'Edit toilet' : 'Add toilet'}
      toilet={toilet}
      onSubmit={handleSubmit}
      onReset={onClose}
      onClose={onClose}
    />
  );
}

const mapState = (state) => {
  const toilet = toiletsSelectors.selectToiletToEdit(state);

  return {
    toilet,
  };
};

const { createToilet, editToilet } = toiletsThunks;
const mapDispatch = {
  editToilet,
  createToilet,
};

export default connect(mapState, mapDispatch)(ToiletsDialogContainer);
