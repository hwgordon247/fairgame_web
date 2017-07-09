import axios from 'axios';

class ItemService {
  getItems(cb) {
    axios.get('http://localhost:5000/items')
      .then((response) => {
        cb(null, response);
      })
      .catch((error) => {
        cb(error, null);
      });
  }
}

export default new ItemService();
