import APIService from './apiService';

class SignInService extends APIService {
  checkInVisitor(visitorInfo) {
    return this.put('/visitor', visitorInfo);
  }

  getChaperones(apiToken) {
    const options = {
      headers: {
        Authorization: apiToken,
      },
    };
    return this.get('/directory', options);
  }
}

export default new SignInService();
