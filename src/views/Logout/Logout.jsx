import React from 'react';
import { connect } from 'react-redux';

import { thunks as userThunks } from '../../redux/user';

class Logout extends React.Component {
  componentDidMount() {
    const { logout } = this.props;

    logout();
  }

  render() {
    return null;
  }
}

const mapDispatch = {
  logout: userThunks.userLogout,
};

export default connect(null, mapDispatch)(Logout);
