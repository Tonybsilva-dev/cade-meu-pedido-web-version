import { extendTheme } from '@chakra-ui/react';
import { config } from './config';

export const theme = extendTheme({
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  config,
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50'
      }
    }
  }
});
