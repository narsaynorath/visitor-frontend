import APIService from './apiService';

class SignInService extends APIService {
  checkInVisitor(visitorInfo, apiToken) {
    const chaperoneEmails = visitorInfo.chaperones.map(
      chaperone => chaperone.email
    );

    const body = {
      first_name: visitorInfo.first_name,
      last_name: visitorInfo.last_name,
      email: visitorInfo.email,
      chaperones: chaperoneEmails,
    };

    const options = {
      headers: {
        Authorization: apiToken,
      },
    };
    return this.post('/addVisitor', body, options);
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
