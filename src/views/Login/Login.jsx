import React from 'react';
import { connect } from 'react-redux';
import { thunks as userThunks } from '../../redux/user';

class Login extends React.Component {
  componentDidMount() {
    const { login } = this.props;

    login();
  }

  render() {
    return null;
  }
}

const mapDispatch = {
  login: userThunks.userLogin,
};

export default connect(null, mapDispatch)(Login);
