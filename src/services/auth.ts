export const TOKEN_KEY = '@cmp-wv:token';
export const TOKEN_PASS_KEY = '@cmp-wv:passwordToken';
export const USER_CREDENTIALS = '@cmp-wv:user';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUser = () => localStorage.getItem(USER_CREDENTIALS);
export const login = (token: string) => localStorage.setItem(TOKEN_KEY, token);
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_CREDENTIALS);
};
