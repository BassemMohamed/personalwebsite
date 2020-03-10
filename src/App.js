import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import themes from "./themes";
import MainRoutes from "./routes";
import BlogPosts from "./assets/posts";
import { PostPage, NotFoundPage } from "./Pages";
import { Menu } from "./UI/";
import { CoffeeButton } from "./UI/Button";
import mainStyle from "./assets/css/main.style.js";
import menuStyle from "./assets/css/menu.style.js";
import "./assets/fonts/aleo/style.css";

const GlobalStyle = createGlobalStyle`
  ${mainStyle}
  ${menuStyle}
`;

const PageWrapper = styled.div`
  text-align: center;
  padding: 1.5rem 0;

  @media (min-width: 450px) {
    padding: 3.5rem 0;
  }
`;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themes.btheme}>
        <GlobalStyle />
        <Router>
          <Menu routes={MainRoutes} post={BlogPosts[BlogPosts.length - 1]} />
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
              <Route path={`/post/:postId`} component={PostPage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
            <CoffeeButton />
          </PageWrapper>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
