export function setLogin(userRole) {
  const data = {
    isAuthenticated: true,
    userInfo: {
      id: '',
      name: '',
      email: '',
      picture: '',
      role: userRole,
    },
  };
  return {
    type: 'SET_LOGIN',
    payload: data,
  };
}

export function setLogout() {
  const data = {
    isAuthenticated: false,
    userInfo: {
      id: '',
      name: '',
      email: '',
      picture: '',
      role: 'Guest',
    },
  };
  return {
    type: 'SET_LOGOUT',
    payload: data,
  };
}
