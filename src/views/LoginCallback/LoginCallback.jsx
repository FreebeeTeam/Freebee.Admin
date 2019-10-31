import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'components';
import { userThunks } from 'redux/user';
import routes from 'routes';

const LoginCallback = ({ location, history, handleAuth }) => {
  const [isSuccess, setSuccess] = useState(null);

  useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      handleAuth(() => {
        history.replace(routes.index());
      }, () => {
        history.replace(routes.login());
      });

      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, []);

  return isSuccess === null || isSuccess
    ? <Spinner />
    : <div>Login failed</div>;
};

const mapDispatch = {
  handleAuth: userThunks.handleUserAuthentication,
};

export default connect(null, mapDispatch)(LoginCallback);
