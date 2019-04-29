import auth0 from 'auth0-js';
import {
  domain,
  clientID,
  callbackUrl,
  responseType,
  scope,
  audience,
  returnAfterLogoutUrl,
} from '../config/auth0Config';
import { appendTokenToRequests } from './http';

const options = {
  domain,
  clientID,
  redirectUri: callbackUrl,
  responseType,
  scope,
  audience,
};

const clearAuthInfo = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');
};

export default class Auth {
  auth0 = new auth0.WebAuth(options);

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = (successCb, failureCb) => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        successCb();
      } else if (err) {
        failureCb();
      }
    });
  };

  getUserProfile = (resolve, reject) => {
    const accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (err) {
        reject(err);
      } else {
        resolve(profile);
      }
    });
  };

  getAccessToken = () => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  };

  setSession = (authResult) => {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    appendTokenToRequests();
  };

  logout = () => {
    clearAuthInfo();

    this.auth0.logout({
      returnTo: returnAfterLogoutUrl,
      clientID: options.clientID,
    });
  };
}

export const getToken = () => {
  return localStorage.getItem('id_token');
};

export const isAuthenticated = () => {
  const accessToken = localStorage.getItem('access_token');
  const idToken = localStorage.getItem('id_token');
  const expiresDate = localStorage.getItem('expires_at');

  if (!accessToken || !idToken || !expiresDate) {
    return false;
  }

  const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
};
