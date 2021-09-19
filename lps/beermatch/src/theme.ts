export const theme = {
  /**
   * For a font size equals 16px, the breakpoints will be:
   * [640, 768, 1024, 1280, 1536, 1920] in pixels.
   */
  breakpoints: ['40rem', '48rem', '64rem', '80rem', '96rem', '120rem'],

  /**
   * Fibonacci Series.
   */
  space: [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
  ],

  /**
   * Perrin Series.
   */
  fontSizes: {
    xxs: 7,
    xs: 10,
    sm: 12,
    base: 17,
    lg: 22,
    xl: 29,
    '2xl': 39,
    '3xl': 51,
    '4xl': 68,
    '5xl': 90,
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

  fontWeights: {
    body: 400,
    heading: 400,
  },

  colors: {
    primary: '#FEAC00',
    secondary: '#283446',
    text: '#343F55',
    heading: '#231F20',
    background: '#FDB92E',
    accent: '#00A9B2',
    highlight: '#FFFFFF',
    muted: '#E0E0E0',
    alert: '#C25450',
    water: '#DDF2FF',
    hop: '#8DDB81',
    accentVariant: '#069959',
    yellow1: '#F2BE37',
    yellow2: '#EEA32B',
    yellow3: '#F99F1B',
  },

  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Anton, sans-serif',
    accent: '"Permanent Marker", cursive',
  },

  sizes: {
    container: '800px',
  },

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'base',
      fontSize: 'base',
      overflowX: 'hidden',
      h2: { fontSize: 'xl' },
    },
  },

  buttons: {
    primary: {
      fontWeight: '700',
      backgroundColor: 'accent',
      paddingX: 8,
      paddingY: 6,
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      color: 'heading',
      textTransform: 'uppercase',
    },
  },

  layout: {
    fullWidth: {
      maxWidth: '100vw',
      width: '100vw',
      marginX: '-50vw',
    },
  },
};
