function readEnv() {
  return {
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URI,
    logoutRedirectUri: process.env.REACT_APP_AUTH0_LOGOUT_REDIRECT_URI,
  };
}
