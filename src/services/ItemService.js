import HttpService from './HttpService';
import { apiUrl } from '../config';
import history from '../util/history';

class ItemService {
  getItems(cb) {
    const requestObject = {
      method: 'GET',
      url: `${apiUrl}/items`
    };
    this._makeRequest(requestObject, cb);
  }

  createItem(name, description, cb) {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    } else {
      const requestObject = {
        method: 'POST',
        url: `${apiUrl}/create-item`,
        data: { name, description },
        headers: {
          authtoken: token
        }
      };
      this._makeRequest(requestObject, cb);
    }
  }

  getUserItems(cb) {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    } else {
      const requestObject = {
        method: 'GET',
        url: `${apiUrl}/user-items`,
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

export default new ItemService();
