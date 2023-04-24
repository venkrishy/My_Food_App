import * as React from 'react';
import GoogleButton from 'react-google-button'
import { createTheme, ThemeProvider } from '@mui/material/styles';




const theme = createTheme();

export default function LandingPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (
    <ThemeProvider theme={theme}>
      <GoogleButton
        onClick={() => { console.log('Google button clicked') }}
      />
    </ThemeProvider>
  );
}