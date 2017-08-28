import HttpService from './HttpService';
import history from '../util/history';
import { apiUrl } from '../config';

class UserService {
  getUser(username, cb) {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    } else {
      const requestObject = {
        method: 'GET',
        url: `${apiUrl}/user/${username}`,
        headers: {
          authtoken: token
        }
      };
      this._makeRequest(requestObject, cb);
    }
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

export default new UserService();
