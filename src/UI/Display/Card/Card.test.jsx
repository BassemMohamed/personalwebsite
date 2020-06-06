import React from "react";
import { mount } from "enzyme";
import Card from "./Card";

describe("<Card />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<Card url="url" />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });

  it("navigates on click", () => {
    Wrapper.simulate("click");
  });
});
