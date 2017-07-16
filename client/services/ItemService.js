import HttpService from './HttpService';
import { apiUrl } from '../config';

class ItemService {
  getItems(cb) {
    const requestObject = {
      method: 'GET',
      url: `${apiUrl}/items`
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


export default new ItemService();
