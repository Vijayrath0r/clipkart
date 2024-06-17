const setUserLogin = (user) => {
  return {
    type: 'LOGIN_USER',
    payload: user
  };
};
const logoutUser = (user) => {
  return {
    type: 'LOGOUT_USER'
  };
};

export { setUserLogin, logoutUser }
