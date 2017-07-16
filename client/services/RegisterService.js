import HttpService from './HttpService';

class RegisterService {
  registerUser(email, username, password, cb) {
    const requestObject = {
      method: 'POST',
      url: 'http://localhost:5000/register',
      data: { username, email, password }
    };
    this._makeRequest(requestObject, cb);
  }

  _makeRequest(requestObject, cb) {
    HttpService.request(requestObject, (error, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, response);
      }
    });
  }
}

export default new RegisterService();
