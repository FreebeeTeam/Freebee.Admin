// @flow
import React, { PureComponent } from 'react';
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
  IconButton,
  withStyles,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
} from '@material-ui/icons';
import cn from 'classnames';
import styles from './style';

type Props = {
  classes: {},
};

type State = {
  anchorElement: HTMLElement | null
}

class Header extends PureComponent<Props, State> {
  state = {
    anchorElement: null,
  }

  handleMenu = (event) => {
    this.setState({ anchorElement: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorElement: null });
  };

  render() {
    const { anchorElement } = this.state;
    const { classes } = this.props;

    const isOpen = !!anchorElement;

    return (
      <div className={cn(classes.root)}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={cn(classes.grow)}
            >
              {'Admin'}
            </Typography>
            <div>
              <IconButton
                color="inherit"
                aria-owns="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleMenu}
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="header-menu"
                open={isOpen}
                anchorEl={anchorElement}
                onClose={this.handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                <MenuItem onClick={this.handleClose}>Setting</MenuItem>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
