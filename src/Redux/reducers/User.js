const InitialUserState = {
  isAuthenticated: false,
  userInfo: {
    id: '',
    name: '',
    email: '',
    picture: '',
    role: 'Guest',
  },
};

const User = (state = InitialUserState, action) => {
  switch (action.type) {
    case 'SET_LOGIN': {
      return action.payload;
    }
    case 'SET_LOGOUT': {
      return action.payload;
    }
    case 'GET_USER_INFO': {
      return state;
    }
    default:
      return state;
  }
};

export default User;
