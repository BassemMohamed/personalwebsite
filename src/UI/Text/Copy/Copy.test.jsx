import React from "react";
import { mount } from "enzyme";
import Copy from "./Copy";

describe("<Copy />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<Copy />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
