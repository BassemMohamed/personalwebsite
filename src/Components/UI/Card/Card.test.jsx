import React from "react";
import { mount } from "enzyme";
import Card from "./Card";

describe("<Card />", () => {
  let Wrapper;
  beforeEach(() => {
    Wrapper = mount(<Card />);
  });
  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
