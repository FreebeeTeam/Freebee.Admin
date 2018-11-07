import React from 'react';
import MuiTable from 'mui-datatables';
import Toolbar from '../toolbar';
import { options } from '../table-options';
import columns from './columns';

const extendedOptions = handleAddClick => ({
  ...options,
  customToolbar: () => <Toolbar handleAddClick={handleAddClick} />,
});

const WifiTable = ({ data, openModal }) => {
  return (
    <MuiTable
      columns={columns}
      data={data}
      options={extendedOptions(openModal('add'))}
    />
  );
};

export default WifiTable;
