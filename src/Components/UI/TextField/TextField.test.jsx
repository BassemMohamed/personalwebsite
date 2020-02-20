import React from "react";
import { mount } from "enzyme";
import TextField from "./TextField";

describe("<TextField />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<TextField />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
