import auth0 from 'auth0-js';
import {
  domain,
  clientID,
  callbackUrl,
  responseType,
  scope,
  audience,
} from '../config/auth0Config';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain,
    clientID,
    redirectUri: callbackUrl,
    responseType,
    scope,
    audience,
  });

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = (history) => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult, history);
        history.replace('/');
      } else if (err) {
        history.replace('/');
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

  setSession = (authResult, history) => {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/');
  };

  logout = (redirect) => {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    redirect();
  };

  isAuthenticated = () => {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
