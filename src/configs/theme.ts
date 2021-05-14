import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
 
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {

    MuiInput: {
      input: {
        '&:-webkit-autofill': {
          '-webkit-box-shadow': '0 0 0 30px white inset !important',
        },
      },
    },
    MuiCssBaseline: {
      '@global': {
        html: {
          width: '100%',
          height: '100%',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          backgroundColor: '#fff',
          width: '100%',
          height: '100%',
          margin: 0,
        },
        '#app': {
          width: '100%',
          height: '100%',
        },
        
    },
  },
}});
