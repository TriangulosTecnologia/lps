export const theme = {
  breakpoints: ['40em', '52em', '64em', '76em'],

  colors: {
    text: 'white',
    background: '#2E2A3A',
    primary: '#24BB78',
    secondary: '#FF6600',
    gray80: '#808080',
  },

  /**
   * Fibonacci series.
   */
  space: [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
  ],

  /**
   * Tailwind theme for font size and line height.
   * https://tailwindcss.com/docs/font-size
   */
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  lineHeights: {
    xs: '1rem',
    sm: '1.25rem',
    base: '1.5rem',
    lg: '1.75rem',
    xl: '1.75rem',
    '2xl': '2rem',
    '3xl': '2.25rem',
    '4xl': '2.5rem',
    '5xl': '1',
    '6xl': '1',
    '7xl': '1',
    '8xl': '1',
    '9xl': '1',
  },
  fonts: {
    body: 'Montserrat',
    heading: '"Source Sans Pro", sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 900,
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'base',
      fontSize: 'base',
    },
  },
};
