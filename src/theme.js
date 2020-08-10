import { createMuiTheme } from '@material-ui/core/styles';

const scTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#12294D',
    },
    text: {
      header: '#F15F24',
      subtitle: 'rgba(0, 0, 0, 0.6)',
    },
    button: {
      highlight: '#CF4A14',
    },
  },
});

export { scTheme };
