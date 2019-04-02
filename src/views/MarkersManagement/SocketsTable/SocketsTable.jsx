import React from 'react';
import MuiTable from 'mui-datatables';
import Toolbar from '../Toolbar';
import { options } from '../tableOptions';
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

const SocketsTable = ({
  title,
  data,
  openAddModal,
  openEditModal,
  deleteEntities,
}) => {
  const tableOptions = extendedOptions(
    openAddModal,
    deleteEntities,
  );

  return (
    <MuiTable
      title={title}
      columns={getColumns(openEditModal)}
      data={data}
      options={tableOptions}
    />
  );
};

export default SocketsTable;
