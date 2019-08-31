import React from "react";
import Header from "./Components/UI/Header";
import { BasicPage } from "./Components/Pages";
import "./assets/css/main.css";
import "./assets/fonts/aleo/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: "Home" };
  }

  render() {
    const PageControls = {
      currentPage: this.state.currentPage,
      pages: ["Home", "Stack", "Quote"],
      navigate: pageName => {
        this.setState({ currentPage: pageName });
      }
    };
    return (
      <>
        <Header PageControls={PageControls} />
        <BasicPage currentPage={PageControls.currentPage} />
      </>
    );
  }
}

export default App;
