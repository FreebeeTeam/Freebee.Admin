const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const callbackUrl = process.env.REACT_APP_AUTH0_CALLBACK_URL;
const responseType = process.env.REACT_APP_AUTH0_RESPONSE_TYPE;
const scope = process.env.REACT_APP_AUTH0_SCOPE;

export {
  domain,
  clientID,
  callbackUrl,
  responseType,
  scope,
};
