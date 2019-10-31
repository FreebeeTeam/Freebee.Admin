import React, { useEffect } from 'react';
import MuiTable from 'mui-datatables';
import { IconButton } from '@material-ui/core';
import TableToolbar from './TableToolbar';
import defaultOptions from './options';

export default function Table({
  title, columns, options, data,
  onRowsDelete,
  onAddClick,
  ActionIcon, onActionButtonClick,
  loadData,
}) {
  useEffect(() => {
    loadData();
  }, []);

  const handleRowsDelete = (deletedRows) => {
    const idsToDelete = deletedRows.data.map(({ dataIndex }) => {
      return data[dataIndex][0];
    });

    onRowsDelete(idsToDelete);
  };

  const renderCustomToolbar = onAddClick
    && (() => <TableToolbar onAddClick={onAddClick} />);

  const fullOptions = {
    ...defaultOptions,
    options,
    customToolbar: renderCustomToolbar,
    onRowsDelete: handleRowsDelete,
  };

  const renderActionColumn = (value, { rowData }) => {
    const id = rowData && rowData[0];

    return (
      <IconButton onClick={() => onActionButtonClick(id)}>
        <ActionIcon />
      </IconButton>
    );
  };

  const columnsWithAction = columns.map((column) => {
    if (column.isAction) {
      const newColumn = { ...column };

      newColumn.options.customBodyRender = renderActionColumn;

      return newColumn;
    }

    return column;
  });

  return (
    <MuiTable
      title={title}
      columns={columnsWithAction}
      data={data}
      options={fullOptions}
    />
  );
}

Table.defaultProps = {
  title: '',
  columns: [],
  options: {},
  data: [],
  onActionButtonClick: () => {},
  loadData: () => {},
  onRowsDelete: () => {},
};
