class LogoutService {
  logout() {
    localStorage.removeItem('token');
  }
}

export default new LogoutService();
