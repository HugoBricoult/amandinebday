import './App.css';
import { BrowserRouter } from "react-router-dom";

import Home from './views/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, lime, orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: green[700],
      contrastText: '#fff',
    },
    secondary: {
      main: lime[300],
      contrastText: '#000',
    }
  }
});

function App() {
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Home/>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
