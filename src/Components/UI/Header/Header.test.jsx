import React from "react";
import { mount } from "enzyme";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Header />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(
      <Router>
        <Header />
      </Router>
    );
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
