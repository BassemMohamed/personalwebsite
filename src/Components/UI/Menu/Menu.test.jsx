import React from "react";
import { mount } from "enzyme";
import Menu from "./Menu";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "../../../Routes/MainRoutes";

describe("<Menu />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(
      <Router>
        <Menu routes={MainRoutes} post={MainRoutes[MainRoutes.length - 1]} />
      </Router>
    );
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });

  it("renders routes on prop", () => {
    expect(Wrapper.find("Link")).toHaveLength(MainRoutes.length);
  });

  it("renders post on prop", () => {
    expect(Wrapper.find("Card")).toHaveLength(2);
  });
});
