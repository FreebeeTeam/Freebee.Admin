import React, { Component } from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

class Toolbar extends Component {
  handleAddClick = () => {
    const { handleAddClick } = this.props;

    handleAddClick();
  }

  render() {
    return (
      <>
        <Tooltip title="Add marker">
          <IconButton onClick={this.handleAddClick}>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </>
    );
  }
}


export default Toolbar;
