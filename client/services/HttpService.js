import axios from 'axios';

class HttpService {
  request(requestObject, cb) {
    axios(requestObject).then((response) => {
      cb(null, response);
    }).catch((error) => {
      cb(error, null);
    });
  }
}

export default new HttpService();
