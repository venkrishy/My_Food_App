import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleButton from 'react-google-button'

const theme = createTheme();

export default function LandingPage() {


  return (
    <ThemeProvider theme={theme}>
      <GoogleButton
        onClick={() => { console.log('Google button clicked') }}
      />
    </ThemeProvider>
  );
}