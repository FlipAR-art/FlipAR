class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {obj} data
   */
   static authenticateUser(data) {
    localStorage.setItem('token', data.jwt);
    localStorage.setItem('email', data.user.email);
    localStorage.setItem('name', data.user.username);
    localStorage.setItem('uid', data.user.id);
    localStorage.setItem('userIsLoggedIn', true);
    return true;
  }
  /**
   * Set locale for  a user. Save a locale string in Local Storage
   *
   * @param {obj} data
   */
   static setLocale(data) {
    localStorage.setItem('locale', data);
    return true;
  }
  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  /**
   * Return Items stored in localStorage
   *
   * @returns {obj}
   */
  static getDatas() {
    let user = {
      name:  localStorage.getItem('name'),
      email:  localStorage.getItem('email'),
      uid: localStorage.getItem('uid'),
      userIsLoggedIn: localStorage.getItem('userIsLoggedIn'),
      locale: localStorage.getItem('locale')
    };
    return user;
  }
  /**
   * Return Items stored in localStorage
   *
   * @returns {obj}
   */
  static updateAvatar(path) {
    localStorage.setItem('avatar', path);
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('uid');
    localStorage.removeItem('userIsLoggedIn');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem('token');
  }
    /**
   * Get a name value.
   *
   * @returns {string}
   */

     static getName() {
      return localStorage.getItem('name');
    }
  /**
   * Get a locale value.
   *
   * @returns {string}
   */

  static getLocale() {
    return (localStorage.getItem('locale')) ? localStorage.getItem('locale') : 'en';
  }

}

export default Auth;
