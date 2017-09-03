import history from '../util/history';

class LogoutService {
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    history.push('/login');
  }
}

export default new LogoutService();
