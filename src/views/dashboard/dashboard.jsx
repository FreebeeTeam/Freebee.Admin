import React from 'react';
import cn from 'classnames';
import { Switch, Route, Link } from 'react-router-dom';
import {
  CssBaseline,
  Avatar,
  withStyles,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Menu,
  MenuItem,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  AccountCircle as AccountCircleIcon,
  Map as MapIcon,
  Comment as CommentIcon,
} from '@material-ui/icons';
import FeedbackManagement from '../feedback-management';

import { feedback, markers, dashboard } from '../../routes';
import styles from './styles';

const Dashboard = (props) => {
  const {
    classes,
    theme,
    profile,
    open,
    anchorEl,
    handleMenuOpen,
    handleMenuClose,
    handleDrawerOpen,
    handleDrawerClose,
    handleLogout,
  } = props;

  const isMenuOpen = Boolean(anchorEl);

  return (
      <>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={cn(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleDrawerOpen}
                className={cn(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                {'Freebee.Admin'}
              </Typography>
              <div className={classes.profile}>
                <Typography variant="subtitle1" color="inherit" noWrap>
                  {profile.nickname}
                </Typography>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                  color="inherit"
                >
                  {profile.picture
                    ? <Avatar alt={profile.username} src={profile.picture} />
                    : <AccountCircleIcon />
                  }
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={isMenuOpen}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleLogout}>Log out</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: cn(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem component={Link} to={feedback()} button key="Feedback">
                <ListItemIcon>
                  <CommentIcon />
                </ListItemIcon>
                <ListItemText primary="Feedback" />
              </ListItem>
              <ListItem component={Link} to={markers()} button key="Markers">
                <ListItemIcon>
                  <MapIcon />
                </ListItemIcon>
                <ListItemText primary="Markers" />
              </ListItem>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact path={dashboard()} component={FeedbackManagement} />
              <Route path={feedback()} component={FeedbackManagement} />
              <Route path={markers()} component={CommentIcon} />
              <Route component={null} />
            </Switch>
          </main>
        </div>
      </>
  );
};

Dashboard.defaultProps = {
  anchorEl: null,
  profile: {
    nickname: '',
    picture: null,
  },
};

export default withStyles(styles, { withTheme: true })(Dashboard);
