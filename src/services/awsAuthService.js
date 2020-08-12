import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUser,
} from 'amazon-cognito-identity-js';

var authenticationData = {
  Username: process.env.API_USER || '',
  Password: process.env.API_PASS || '',
};

var authenticationDetails = new AuthenticationDetails(authenticationData);

var poolData = {
  UserPoolId: 'us-east-2_yWRkOEFLL', // Your user pool id here
  ClientId: '2nk1shldaugv5agice7ham165j', // Your client id here
};

var userPool = new CognitoUserPool(poolData);
var userData = {
  Username: process.env.API_USER || '',
  Pool: userPool,
};

var cognitoUser = new CognitoUser(userData);

export default function asyncAuthenticateUser() {
  return new Promise(function (resolve, reject) {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: resolve,
      onFailure: reject,
    });
  });
}
