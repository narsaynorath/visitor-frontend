import APIService from './apiService';

class TokenService extends APIService {
  getTokens(code) {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', '2nk1shldaugv5agice7ham165j');
    params.append(
      'redirect_uri',
      process.env.REACT_APP_URL || 'http://localhost:3000'
    );
    params.append('code', code);

    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    return this.post('/oauth2/token', params, options, 'auth');
  }
}

export default new TokenService();
