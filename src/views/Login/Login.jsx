import { useEffect } from 'react';
import { connect } from 'react-redux';
import { userThunks } from '../../redux/user';

const Login = ({ login }) => {
  useEffect(() => {
    login();
  }, []);

  return null;
};

const mapDispatch = {
  login: userThunks.userLogin,
};

export default connect(null, mapDispatch)(Login);
