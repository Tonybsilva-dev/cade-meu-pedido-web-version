import React, { PropsWithChildren } from 'react';
import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';


const appProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <ToastProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </ToastProvider>
);

export default appProvider;
