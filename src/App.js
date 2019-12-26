import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import { PostPage, NotFoundPage } from "./Components/Pages";
import { Menu } from "./Components/UI/";
import { CoffeeButton } from "./Components/UI/Button";
import "./assets/css/main.css";
import "./assets/css/menu.css";
import "./assets/fonts/aleo/style.css";

const PageWrapper = styled.div`
  text-align: center;
  padding: 1rem 0;

  @media (min-width: 450px) {
    padding: 3rem 0;
  }
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Menu />
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
