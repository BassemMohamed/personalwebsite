import React from "react";
import { mount } from "enzyme";
import SocialBar from "./SocialBar";

describe("<SocialBar />", () => {
  let Wrapper;
  beforeEach(() => {
    Wrapper = mount(<SocialBar />);
  });
  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
