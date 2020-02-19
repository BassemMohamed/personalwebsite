import React from "react";
import { mount } from "enzyme";
import SocialItem from "./SocialItem";

describe("<SocialItem />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<SocialItem />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
