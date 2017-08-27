import HttpService from './HttpService';
import { apiUrl } from '../config';

class RegisterService {
  registerUser(email, username, password, cb) {
    const requestObject = {
      method: 'POST',
      url: `${apiUrl}/register`,
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
