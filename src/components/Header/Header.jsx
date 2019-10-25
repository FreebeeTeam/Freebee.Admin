import React, { useState } from 'react';
import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, } from '@material-ui/core';
import cc from 'classcat';
import { AccountCircle as AccountCircleIcon, Menu as MenuIcon, } from '@material-ui/icons';
import useStyles from './styles';

export default function Header({
  onMenuClick,
  onLogoutClick,
  profile,
}) {
  const classes = useStyles();
  const [anchorElement, setAnchorElement] = useState(null);
  const isAvatarMenuOpen = Boolean(anchorElement);

  const handleAvatarClick = (e) => {
    e.preventDefault();
    setAnchorElement(e.currentTarget);
  };

  const handleAvatarMenuClose = () => {
    setAnchorElement(null);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setAnchorElement(null);
    onLogoutClick();
  };

  return (
    <AppBar
      position="sticky"
      className={cc(classes.appBar)}
    >
      <Toolbar disableGutters>
        <IconButton
          color="inherit"
          onClick={onMenuClick}
          className={cc(classes.menuButton)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={classes.title}
          variant="h6"
          color="inherit"
          noWrap
        >
          Finds.Admin
        </Typography>
        <Box component="div" className={classes.profile}>
          <Typography variant="subtitle1" color="inherit" noWrap>
            {profile.nickname}
          </Typography>
          <IconButton
            aria-haspopup="true"
            onClick={handleAvatarClick}
            color="inherit"
          >
            {profile.picture
              ? <Avatar alt={profile.username} src={profile.picture} />
              : <AccountCircleIcon />}
          </IconButton>

          <Menu
            anchorEl={anchorElement}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isAvatarMenuOpen}
            onClose={handleAvatarMenuClose}
          >
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
