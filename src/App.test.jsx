import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("<App />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<App />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
