import axios from 'axios';

class RegisterService {
  registerUser(email, username, password, cb) {
    axios.post('http://localhost:5000/register', {
      username, email, password
    })
      .then((response) => {
        cb(null, response);
      })
      .catch((error) => {
        cb(error, null);
      });
  }
}

export default new RegisterService();
