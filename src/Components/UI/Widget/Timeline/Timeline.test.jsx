import React from "react";
import { mount } from "enzyme";
import Timeline from "./Timeline";

describe("<Timeline />", () => {
  let Wrapper;
  beforeEach(() => {
    Wrapper = mount(<Timeline data={[]} />);
  });
  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
