import './assets/fonts/aleo/style.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import mainStyle from './assets/css/main.style.js';
import menuStyle from './assets/css/menu.style.js';
import { NotFoundPage } from './Pages';
import MainRoutes from './routes';
import themes from './themes';

const GlobalStyle = createGlobalStyle`
  ${mainStyle}
  ${menuStyle}
`;

const PageWrapper = styled.div`
  text-align: center;
`;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themes.main}>
        <GlobalStyle />
        <Router>
          <PageWrapper id="page-wrapper">
            <Switch>
              {MainRoutes.map(route => (
                <Route
                  key={route.key}
                  path={route.key}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </PageWrapper>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
