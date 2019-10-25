import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Header, SideNavBar } from 'components';
import routes from 'routes';
import FeedbackManagement from '../FeedbackManagement';
import MarkersManagement from '../MarkersManagement';
import useStyles from './styles';

export default function Dashboard({
  profile,
  onLogout,
  match,
  location,
}) {
  const classes = useStyles();
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const handleSideNavOpen = () => {
    setSideNavOpen(true);
  };

  const handleSideNavClose = () => {
    setSideNavOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Header
          profile={profile}
          onMenuClick={handleSideNavOpen}
          onLogoutClick={onLogout}
        />
        <section className={classes.inner}>
          <SideNavBar
            isOpen={isSideNavOpen}
            onOpen={handleSideNavOpen}
            onClose={handleSideNavClose}
          />
          <main className={classes.content}>
            <Switch location={location}>
              <Route
                exact
                path={`${match.path}`}
                render={({ match }) => {
                  return <Redirect to={`${match.path}${routes.feedback()}`} />;
                }}
              />
              <Route
                path={`${match.path}${routes.feedback()}`}
                render={() => {
                  return <FeedbackManagement />;
                }}
              />
              <Route
                path={`${match.path}${routes.markers()}`}
                render={() => {
                  return <MarkersManagement />;
                }}
              />
            </Switch>
          </main>
        </section>
      </div>
    </>
  );
}

Dashboard.defaultProps = {
  profile: {
    nickname: '',
    picture: null,
  },
};
