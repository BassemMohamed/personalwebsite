import React from "react";
import { mount } from "enzyme";
import StackPage from "./StackPage";

describe("<StackPage />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<StackPage />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
