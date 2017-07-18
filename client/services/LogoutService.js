import history from '../util/history';

class LogoutService {
  logout() {
    localStorage.removeItem('token');
    history.push('/login');
  }
}

export default new LogoutService();
