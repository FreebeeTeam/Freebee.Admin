import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Spinner } from 'components';
import { userThunks } from 'redux/user';
import routes from 'routes';
import Dashboard from './Dashboard';

const DashboardContainer = ({
  getUserProfile,
  history, profile, match, location, isFetchingProfile,
}) => {
  const handleLogout = () => {
    history.replace(routes.logout());
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  if (isFetchingProfile) {
    return <Spinner />;
  }

  return (
    <Dashboard
      profile={profile}
      onLogout={handleLogout}
      match={match}
      location={location}
    />
  );
};

const mapState = (state) => {
  return {
    ...state.user,
  };
};

const { getUserProfile } = userThunks;

const mapDispatch = {
  getUserProfile,
};

export default withRouter(connect(mapState, mapDispatch)(DashboardContainer));
