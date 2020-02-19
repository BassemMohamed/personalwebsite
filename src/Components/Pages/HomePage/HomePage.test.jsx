import React from "react";
import { mount } from "enzyme";
import HomePage from "./HomePage";

describe("<HomePage />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<HomePage />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
