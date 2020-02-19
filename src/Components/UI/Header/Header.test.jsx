import React from "react";
import { mount } from "enzyme";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "../../../Routes/MainRoutes";

describe("<Header />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(
      <Router>
        <Header routes={MainRoutes} />
      </Router>
    );
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
