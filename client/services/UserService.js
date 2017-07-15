import axios from 'axios';

class UserService {
  getCurrentUser(cb) {
    axios({
      method: 'GET',
      url: 'http://localhost:5000/user',
      headers: {
        authtoken: localStorage.getItem('token')
      }
    }).then((response) => {
      cb(null, response);
    }).catch((error) => {
      cb(error, null);
    });
  }
}

export default new UserService();
