import React from 'react';
import MuiTable from 'mui-datatables';
import columns from './columns';

const options = {
  download: false,
  print: false,
};

const WifiTable = ({ data }) => {
  return (
    <MuiTable
      columns={columns}
      data={data}
      options={options}
    />
  );
};

export default WifiTable;
