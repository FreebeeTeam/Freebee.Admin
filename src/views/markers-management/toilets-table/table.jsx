import React from 'react';
import MuiTable from 'mui-datatables';
import Toolbar from '../toolbar';
import { options } from '../table-options';
import getColumns from './columns';

const extendedOptions = (handleAddClick, deleteToilets) => ({
  ...options,
  customToolbar: () => <Toolbar handleAddClick={handleAddClick} />,
  onRowsDelete: (deletedRows) => {
    const { data } = deletedRows;
    const indexesToDelete = data.map(item => item.dataIndex);
    deleteToilets(indexesToDelete);
  },
});

const ToiletsTable = ({ data, openModal, deleteEntities }) => {
  const tableOptions = extendedOptions(
    openModal('add'),
    deleteEntities,
  );

  return (
    <MuiTable
      columns={getColumns(openModal('edit'))}
      data={data}
      options={tableOptions}
    />
  );
};

export default ToiletsTable;
