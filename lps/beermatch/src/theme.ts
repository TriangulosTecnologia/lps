import type { Theme } from 'theme-ui';

export const theme: Theme = {
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
  fontSizes: [7, 10, 12, 17, 22, 29, 39, 51, 68, 90],

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
    monospace: 'Menlo, monospace',
  },

  radii: [0, 12],

  sizes: {
    container: '800px',
  },

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 3,
      overflowX: 'hidden',
      textAlign: 'center',
      h1: { fontSize: 9 },
      h2: { fontSize: 8 },
      h3: { fontSize: 7 },
      h4: { fontSize: 6 },
      h5: { fontSize: 5 },
      h6: { fontSize: 4 },
      p: { lineHeight: 1.5, whiteSpace: 'pre-line' },
    },
    a: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'text',
    },
    hr: {
      borderWidth: 3,
      width: '100%',
    },
  },

  buttons: (() => {
    const base = {
      fontSize: [3],
      fontWeight: 700,
      paddingX: 8,
      paddingY: 7,
      borderRadius: 0,
      fontFamily: 'body',
      '&:hover': {
        cursor: 'pointer',
      },
      '&:disabled': {
        cursor: 'auto',
        backgroundColor: 'muted',
      },
    };

    return {
      primary: {
        ...base,
        backgroundColor: 'accent',
      },
      transparent: {
        ...base,
        color: 'secondary',
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'secondary',
      },
    };
  })(),

  cards: {
    highlight: {
      backgroundColor: 'highlight',
      padding: [7, 8],
      borderRadius: 1,
    },
  },

  forms: {
    label: {
      fontSize: 2,
      fontWeight: 700,
      marginY: 5,
      alignItems: 'center',
    },
    input: {
      borderColor: 'muted',
      borderRadius: 0,
      padding: 6,
      '::placeholder': {
        color: 'muted',
      },
      ':disabled': {
        backgroundColor: 'muted',
      },
    },
  },

  layout: {
    container: {
      paddingX: 7,
    },
    fullWidth: {
      maxWidth: '100vw',
      width: '100vw',
      marginX: '-50vw',
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      color: 'heading',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
};
