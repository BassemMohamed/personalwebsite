import React from "react";
import { mount } from "enzyme";
import Timeline from "./Timeline";

describe("<Timeline />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<Timeline data={[]} />);
  });
  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
