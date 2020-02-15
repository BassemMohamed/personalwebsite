import React from "react";
import { mount } from "enzyme";
import Label from "./Label";

describe("<Label />", () => {
  let Wrapper;
  beforeEach(() => {
    Wrapper = mount(<Label />);
  });
  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
