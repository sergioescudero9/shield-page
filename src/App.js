import React, { Component, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import { theme } from './theme';
import GlobalStyles from './globalStyles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Suspense fallback={<h2>Loading</h2>}>
            <GlobalStyles />
            <Router />
          </Suspense>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
