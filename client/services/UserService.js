import axios from 'axios';
import history from '../util/history';

class UserService {
  getCurrentUser(cb) {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    } else {
      axios({
        method: 'GET',
        url: 'http://localhost:5000/user',
        headers: {
          authtoken: token
        }
      }).then((response) => {
        cb(null, response);
      }).catch((error) => {
        cb(error, null);
      });
    }
  }
}

export default new UserService();
