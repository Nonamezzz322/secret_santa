import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#191e3a',
      warning: '#e2a03f'
    },
    secondary: {
      main: '#c73131'
    }
  }
});

export const darkTheme = createMuiTheme({
  palette: {
  }
});
