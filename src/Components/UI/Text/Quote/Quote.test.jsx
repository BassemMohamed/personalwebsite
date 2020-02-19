import React from "react";
import { mount } from "enzyme";
import Quote from "./Quote";

describe("<Quote />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<Quote />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
