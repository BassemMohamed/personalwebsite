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

  navigate = pageName => {
    this.setState({ currentPage: pageName });
  };

  render() {
    const PageControls = {
      currentPage: this.state.currentPage,
      navigate: this.navigate
    };
    return (
      <>
        <Header PageControls={PageControls} />
        <BasicPage PageControls={PageControls} />
      </>
    );
  }
}

export default App;
