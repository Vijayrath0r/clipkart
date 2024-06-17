const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER': {
      const user = action.payload;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      return {
        ...state,
        user,
        isLoggedIn: true
      };
    }
    case 'LOGOUT_USER': {
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
      return {
        ...state,
        user: null,
        isLoggedIn: false
      };
    }
    default:
      return state;
  }
};

export default userReducer;
