import { BrowserRouter } from 'react-router-dom';
import { Box, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import './App.css';
import Routes from './Routes';

const THEME = createTheme({
  // color: {
  //   primary: "#33425B",
  //   secondary: "#38817A",
  //   tertiary: "#87DFD6",
  //   quaternary: "#F9F8EB"
  // },
  // color: {
  //   primary: "#937DC2",
  //   secondary: "#C689C6",
  //   tertiary: "#FFABE1",
  //   quaternary: "#FFE6F7"
  // },
  color: {
    primary: "#5B305A",
    secondary: "#E04B5A",
    tertiary: "#9A4C68",
    quaternary: "#FFEEEE"
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 2000,
      xl: 3500,
    },
  },

})

THEME.typography.h3 = {
  [THEME.breakpoints.up('xs')]: {
    fontSize: '1.2rem',
  },
  [THEME.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
  [THEME.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
  [THEME.breakpoints.up('lg')]: {
    fontSize: '5rem',
  },
  [THEME.breakpoints.up('xl')]: {
    fontSize: '10rem',
  },
};
THEME.typography.h5 = {
  [THEME.breakpoints.up('xs')]: {
    fontSize: '1rem',
  },
  [THEME.breakpoints.up('sm')]: {
    fontSize: '1.3rem',
  },
  [THEME.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  [THEME.breakpoints.up('lg')]: {
    fontSize: '3.5rem',
  },
  [THEME.breakpoints.up('xl')]: {
    fontSize: '7rem',
  },
};
THEME.typography.body1 = {
  [THEME.breakpoints.up('xs')]: {
    fontSize: '1rem',
  },
  [THEME.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
  [THEME.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  [THEME.breakpoints.up('lg')]: {
    fontSize: '4rem',
  },
  [THEME.breakpoints.up('xl')]: {
    fontSize: '6rem',
  },
};

function App() {
  return (
    <Box sx={{ backgroundColor: THEME.color.quaternary, height: '100%', minHeight: '100vh' }}>
      <BrowserRouter>
        <ThemeProvider theme={THEME}>
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </Box>
  )
}

export default App;