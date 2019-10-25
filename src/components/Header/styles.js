import { makeStyles } from '@material-ui/core';

const sideMargin = 12;

export default makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginLeft: sideMargin,
    marginRight: sideMargin * 3,
  },
  title: {
    flexGrow: 1,
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    marginRight: sideMargin * 2,
  },
}));
