import React from 'react';
import MuiTable from 'mui-datatables';
import { options } from './options';
import getColumns from './columns';

// eslint-disable-next-line arrow-parens
const extendedOptions = (deleteFeedback) => ({
  ...options,
  onRowsDelete: (deletedRows) => {
    const { data } = deletedRows;
    const indexesToDelete = data.map(item => item.dataIndex);

    deleteFeedback(indexesToDelete);
  },
});

const FeedbackTable = ({ data, deleteFeedback }) => {
  const tableOptions = extendedOptions(
    deleteFeedback,
  );

  return (
    <MuiTable
      columns={getColumns(() => {})}
      data={data}
      options={tableOptions}
    />
  );
};

FeedbackTable.defaultProps = {
  data: [],
  deleteFeedback: () => {},
};

export default FeedbackTable;
