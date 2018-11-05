import React from 'react';
import MuiTable from 'mui-datatables';
import columns from './columns';

const options = {
  download: false,
  print: false,
};

const ToiletsTable = ({ data }) => {
  return (
    <MuiTable
      download={false}
      print={false}
      columns={columns}
      data={data}
      options={options}
    />
  );
};

export default ToiletsTable;
