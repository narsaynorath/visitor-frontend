import APIService from './apiService';

class SignInService extends APIService {
  checkInVisitor(visitorInfo) {
    this.put('/visitor', visitorInfo);
  }
}

export default new SignInService();
