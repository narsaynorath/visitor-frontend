import APIService from './apiService';

class SignOutService extends APIService {
  signOut(email, apiToken) {
    const options = {
      headers: {
        Authorization: apiToken,
      },
      params: {
        email: email,
      },
    };
    return this.patch('/addVisitor', null, options);
  }
}

export default new SignOutService();
