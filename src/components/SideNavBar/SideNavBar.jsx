import React from 'react';
import { Link } from 'react-router-dom';
import cc from 'classcat';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer as Drawer,
} from '@material-ui/core';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Comment as CommentIcon,
  Map as MapIcon,
} from '@material-ui/icons';
import routes from 'routes';
import useStyles from './styles';

export default function SideNavBar({
  isOpen,
  onClose,
  onOpen, match,
}) {
  const classes = useStyles();
  return (
    <Drawer
      classes={{
        paper: cc(
          classes.drawerPaper,
          !isOpen && classes.drawerPaperClose,
        ),
      }}
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={onClose}>
          {isOpen
            ? <ChevronRightIcon />
            : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem
          component={Link}
          to={`${match.url}${routes.feedback()}`}
          button
          key="Feedback"
        >
          <ListItemIcon>
            <CommentIcon />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItem>
        <ListItem
          component={Link}
          to={`${match.url}${routes.markers()}`}
          button
          key="Markers"
        >
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Markers" />
        </ListItem>
      </List>
    </Drawer>
  );
}
