import { extendTheme } from '@chakra-ui/react';

const theme = {
  colors: {
    customs: {
      bg: {
        dark: '#030302',
        middle: '#C3BFBD',
        light: '#E6E6E6'
      },
      text: {
        dark: '#463B30',
        middle: '#605D5B',
        light: '#827D7D'
      }
    }
  }
};

export default extendTheme(theme);
