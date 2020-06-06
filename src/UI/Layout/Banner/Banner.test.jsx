import React from "react";
import { mount } from "enzyme";
import Banner from "./Banner";

describe("<Banner />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<Banner />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
