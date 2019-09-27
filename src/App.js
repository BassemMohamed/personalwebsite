import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import { PostPage } from "./Components/Pages";
import Header from "./Components/UI/Header";
import "./assets/css/main.css";
import "./assets/fonts/aleo/style.css";

const PageWrapper = styled.div`
  margin: 100px auto 50px auto;
  padding: 0 20px;
  text-align: center;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <PageWrapper>
          {MainRoutes.map(route => (
            <Route
              key={route.key}
              path={route.key}
              exact={route.exact}
              component={route.component}
            />
          ))}
          <Route path={`/post/:postId`} component={PostPage} />
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
