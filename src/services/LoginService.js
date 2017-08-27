import HttpService from './HttpService';
import { apiUrl } from '../config';

class LoginService {
  loginUser(username, password, cb) {
    const requestObject = {
      method: 'POST',
      url: `${apiUrl}/login`,
      data: { username, password }
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

export default new LoginService();
