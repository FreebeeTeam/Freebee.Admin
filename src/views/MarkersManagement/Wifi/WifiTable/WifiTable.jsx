import React from 'react';
import { Table } from 'components';
import { Edit as EditIcon } from '@material-ui/icons';
import { columns } from './columns';

const WifiTable = ({
  data,
  onAddClick,
  onActionButtonClick,
  deleteEntities,
  loadData,
}) => {
  return (
    <Table
      title="Wifi"
      data={data}
      loadData={loadData}
      columns={columns}
      onRowsDelete={deleteEntities}
      onActionButtonClick={onActionButtonClick}
      onAddClick={onAddClick}
      ActionIcon={EditIcon}
    />
  );
};

export default WifiTable;
