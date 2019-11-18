export const getToken = () => localStorage.getItem('token');

export const isAuthenticated = () => {
  if(localStorage.getItem('token') !== null){
    return true;
  }
  return false;
};

export const login = token => localStorage.setItem('token', token.token);

export const logout = () => localStorage.removeItem('token');