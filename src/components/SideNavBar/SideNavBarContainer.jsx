import React from 'react';
import { withRouter } from 'react-router-dom';
import SideNavBar from './SideNavBar';

const SideNavBarContainer = (props) => {
  return (
    <SideNavBar
      {...props}
    />
  );
};

export default withRouter(SideNavBarContainer);
