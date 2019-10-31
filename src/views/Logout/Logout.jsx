import { useEffect } from 'react';
import { connect } from 'react-redux';
import { userThunks } from '../../redux/user';

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
  }, []);

  return null;
};

const mapDispatch = {
  logout: userThunks.userLogout,
};

export default connect(null, mapDispatch)(Logout);
