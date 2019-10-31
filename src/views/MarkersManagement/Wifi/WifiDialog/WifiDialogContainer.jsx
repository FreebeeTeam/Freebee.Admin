import React from 'react';
import { connect } from 'react-redux';
import { wifiThunks, wifiSelectors } from 'redux/markers/wifi';
import _ from 'lodash';
import Dialog from './WifiDialog';

function WifiDialogContainer({
  isOpen,
  onClose, editWifi, createWifi, wifi,
}) {
  const handleSubmit = (entity) => {
    if (entity.id) {
      editWifi(entity);
    } else {
      createWifi(entity);
    }
    onClose();
  };

  const key = _.get(wifi, 'id', null);

  return (
    <Dialog
      key={key}
      isOpen={isOpen}
      title={key ? 'Edit wifi' : 'Add wifi'}
      wifi={wifi}
      onSubmit={handleSubmit}
      onReset={onClose}
      onClose={onClose}
    />
  );
}

const mapState = (state) => {
  const wifiToEdit = wifiSelectors.selectWifiToEdit(state);

  return {
    wifi: wifiToEdit,
  };
};

const { editWifi, createWifi } = wifiThunks;

const mapDispatch = {
  editWifi,
  createWifi,
};

export default connect(mapState, mapDispatch)(WifiDialogContainer);
