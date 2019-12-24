import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import { PostPage, NotFoundPage } from "./Components/Pages";
import BurgerMenu from "./Components/UI/BurgerMenu";
import "./Assets/css/main.css";
import "./Assets/css/menu.css";
import "./Assets/fonts/aleo/style.css";

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
        <BurgerMenu />
        <PageWrapper id="page-wrapper">
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
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
