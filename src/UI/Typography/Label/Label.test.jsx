import React from "react";
import { mount } from "enzyme";
import Label from "./Label";

describe("<Label />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<Label children="text" />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
