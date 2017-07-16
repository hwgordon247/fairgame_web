import axios from 'axios';

class UserService {
  getCurrentUser(cb) {
    const token = localStorage.getItem('token');
    if (!token) 
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

export default new UserService();