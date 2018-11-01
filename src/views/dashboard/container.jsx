import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { index } from '../../routes';
import Dashboard from './dashboard';

class Container extends Component {
  state = {
    open: false,
    anchorEl: null,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    const { auth, history } = this.props;

    this.setState({ anchorEl: null });
    auth.logout(() => history.replace(index()));
  }

  render() {
    const { open, anchorEl } = this.state;

    return (
      <Dashboard
        open={open}
        anchorEl={anchorEl}
        handleMenuOpen={this.handleMenuOpen}
        handleMenuClose={this.handleMenuClose}
        handleDrawerOpen={this.handleDrawerOpen}
        handleDrawerClose={this.handleDrawerClose}
        handleLogout={this.handleLogout}
      />
    );
  }
}

export default withRouter(Container);
