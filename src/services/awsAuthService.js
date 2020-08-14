import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUser,
} from 'amazon-cognito-identity-js';

var authenticationData = {
  Username: process.env.REACT_APP_API_USER || '',
  Password: process.env.REACT_APP_API_PASS || '',
};

var authenticationDetails = new AuthenticationDetails(authenticationData);

var poolData = {
  UserPoolId: process.env.REACT_APP_USR_POOL_ID || 'us-east-2_yWRkOEFLL', // Your user pool id here
  ClientId: process.env.REACT_APP_CLIENT_ID || '2nk1shldaugv5agice7ham165j', // Your client id here
};

var userPool = new CognitoUserPool(poolData);
var userData = {
  Username: process.env.REACT_APP_API_USER || '',
  Pool: userPool,
};

var cognitoUser = new CognitoUser(userData);

function asyncAuthenticateUser() {
  console.log(process.env);
  return new Promise(function (resolve, reject) {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: resolve,
      onFailure: reject,
    });
  });
}

export default async function getAPIToken() {
  const cognitoUserSession = await asyncAuthenticateUser();
  const apiToken = cognitoUserSession.accessToken.jwtToken;
  return apiToken;
}
