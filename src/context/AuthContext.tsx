import jwtDecode, { JwtPayload } from 'jwt-decode';
import React, { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import errors from '../utils/errors';

import { useAppToast } from './ToastContext';

interface AuthState {
  token: string;
  user: object
}
export interface SignInCredentials {
  email: string;
  senha: string;
}

interface AuthContextData {
  user: any | object;
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const { toast } = useAppToast();

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@cmp-wv:token');
    const user = localStorage.getItem('@cmp-wv:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, senha }: SignInCredentials) => {
    try {

      const response = await api.post('/auth', {
        email,
        senha
      });

      const { token, user } = response.data;

      localStorage.setItem('@cmp-wv:token', token);
      localStorage.setItem('@cmp-wv:user', JSON.stringify(user));

      setData({ token, user });

      toast.success('Feito!', 'Login realizado com sucesso!');
    } catch (error) {
      toast.error(errors.user(error as any));
    }
  }, [toast]);

  const signOut = useCallback(() => {
    localStorage.removeItem('@cmp:token');
    localStorage.removeItem('@cmp:user');

    setData({} as AuthState);

  }, []);


  useEffect(() => {
    const token = localStorage.getItem('@cmp:token');
    const currentDate = Date.now();

    if (token) {
      let tokenObj = jwtDecode(token) as JwtPayload;

      if(tokenObj.exp){
        const tokenExp = tokenObj.exp * 1000;
        if(tokenExp < currentDate) signOut();
      }
    }

  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
