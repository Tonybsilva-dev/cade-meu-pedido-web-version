import { useToast } from '@chakra-ui/react';
import { createContext, PropsWithChildren, useContext } from 'react';

interface ContextProps {
  toast: {
    success: (title: string, description?: string) => void
    error: (title: string, description?: string) => void
    info: (title: string, description?: string) => void
  }
}
const ToastContext = createContext<ContextProps>({} as ContextProps);
export const ToastProvider: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  const _toast = useToast();
  const toast = {
    success: (title: string, description = '') => {
      _toast({
        title: title,
        description: description,
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top'
      });
    },
    error: (title: string, description = '') => {
      _toast({
        title: title,
        description: description,
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top'
      });
    },
    info: (title: string, description = '') => {
      _toast({
        title: title,
        description: description,
        status: 'info',
        duration: 4000,
        isClosable: true,
        position: 'top'
      });
    }
  };

  return <ToastContext.Provider value={{ toast }}>
    {children}
  </ToastContext.Provider>;
};

export function useAppToast(): ContextProps {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useAppToast must be used within a ToastProvider');
  }

  return context;
}
