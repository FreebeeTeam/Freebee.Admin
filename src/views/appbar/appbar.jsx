import React from 'react';
import cn from 'classnames';
import { Switch, Route, Link } from 'react-router-dom';
import {
  withStyles,
  Drawer,
  AppBar,
  Toolbar,
  List,
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
  Map as MapIcon,
  Comment as CommentIcon,
} from '@material-ui/icons';
import FeedbackManagement from '../feedback-management';

import { feedback, markers } from '../../routes';
import styles from './styles';

class MiniDrawer extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={cn(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={cn(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {'Admin'}
            </Typography>
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
            <IconButton onClick={this.handleDrawerClose}>
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
            <Route path="/" component={FeedbackManagement} />
            <Route exact path={feedback()} component={FeedbackManagement} />
            <Route exact path={markers()} component={null} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MiniDrawer);
