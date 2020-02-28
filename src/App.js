import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainRoutes from "./routes";
import BlogPosts from "./posts";
import { PostPage, NotFoundPage } from "./Pages";
import { Menu } from "./UI/";
import { CoffeeButton } from "./UI/Button";
import "./assets/css/main.css";
import "./assets/css/menu.css";
import "./assets/fonts/aleo/style.css";

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
    );
  }
}

export default App;
