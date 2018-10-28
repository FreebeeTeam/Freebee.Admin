import React from 'react';
import cn from 'classnames';
import {
  withStyles,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import {
  Delete as DeleteIcon,
  FilterList as FilterListIcon,
} from '@material-ui/icons';

import styles from './styles';

const EnhancedTableToolbar = (props) => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={cn(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {`${numSelected} selected`}
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            {''}
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

// EnhancedTableToolbar.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
// };

export default withStyles(styles)(EnhancedTableToolbar);