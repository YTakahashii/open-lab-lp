import { theme, DefaultTheme } from '@chakra-ui/core';

export const customTheme: DefaultTheme = {
  ...theme,
  breakpoints: ['480px', '600px', '960px', '1280px'], // https://material.io/design/layout/responsive-layout-grid.html#breakpoints
  colors: {
    ...theme.colors,
  },
};

export type CustomTheme = typeof customTheme;
