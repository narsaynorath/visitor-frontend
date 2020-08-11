import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#12294D',
      dark: '#2C387E',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#CF4A14',
      dark: '#FFB300',
      contrastText: '#FFF',
    },
    error: {
      main: '#d01f2a',
    },
    text: {
      header: '#F15F24',
      subtitle: 'rgba(0, 0, 0, 0.6)',
    },
  },
  typography: {
    button: {
      textTransform: 'capitalize',
    },
  },
  overrides: {
    MuiFormLabel: {
      asterisk: {
        color: '#db3131',
        '&$error': {
          color: '#db3131',
        },
      },
    },
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: '#FFB300',
        },
        '&$active': {
          color: '#CF4A14',
        },
      },
    },
  },
});

export default theme;
