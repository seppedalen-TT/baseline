import type { AppProps } from 'next/app'

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import muiTheme from 'config/mui-theme'

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp
