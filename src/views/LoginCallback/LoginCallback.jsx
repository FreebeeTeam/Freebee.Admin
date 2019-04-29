import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from '../../components';

import { thunks as userThunks } from '../../redux/user';
import { routes } from '../../routes';

class LoginCallback extends React.Component {
  state = {
    success: null,
  };

  componentDidMount() {
    const { location, history, handleAuth } = this.props;

    if (/access_token|id_token|error/.test(location.hash)) {
      handleAuth(() => {
        history.replace(routes.index());
      }, () => {
        history.replace(routes.login());
      });

      this.setState({
        success: true,
      });
    } else {
      this.setState({ success: false });
    }
  }

  render() {
    const { success } = this.state;

    return success === null || success === true
      ? <Spinner />
      : <div>ERROR</div>;
  }
}

const mapDispatch = {
  handleAuth: userThunks.handleUserAuthentication,
};

export default connect(null, mapDispatch)(LoginCallback);
