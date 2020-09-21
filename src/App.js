import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import colors from './styles/Colors'

import Header from './components/Header/Header'
import Home from './components/pages/Home'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={colors}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
