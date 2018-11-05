import React from 'react';
import MuiTable from 'mui-datatables';
import columns from './columns';

const ToiletsTable = ({ }) => {
  return (
    <MuiTable
      download={false}
      print={false}
      columns={columns}
      data={[]}
    />
  );
};

export default ToiletsTable;
