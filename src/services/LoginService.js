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
        console.log(error);
      } else {
        cb(response);
      }
    });
  }
}

export default new LoginService();
