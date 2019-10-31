import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { socketsThunks, socketsSelectors } from 'redux/markers/sockets';
import Dialog from './SocketsDialog';

function SocketsDialogContainer({
  isOpen,
  onClose, editSocket, createSocket, socket,
}) {
  const handleSubmit = (entity) => {
    if (entity.id) {
      editSocket(entity);
    } else {
      createSocket(entity);
    }
    onClose();
  };

  const key = _.get(socket, 'id', null);

  return (
    <Dialog
      key={key}
      isOpen={isOpen}
      title={key ? 'Edit socket' : 'Add socket'}
      socket={socket}
      onSubmit={handleSubmit}
      onReset={onClose}
      onClose={onClose}
    />
  );
}

const mapState = (state) => {
  const socket = socketsSelectors.selectSocketToEdit(state);
  return {
    socket,
  };
};

const { createSocket, editSocket } = socketsThunks;
const mapDispatch = {
  editSocket,
  createSocket,
};

export default connect(mapState, mapDispatch)(SocketsDialogContainer);
