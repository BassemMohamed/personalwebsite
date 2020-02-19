import React from "react";
import { mount } from "enzyme";
import BlogPage from "./BlogPage";

describe("<BlogPage />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<BlogPage />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
