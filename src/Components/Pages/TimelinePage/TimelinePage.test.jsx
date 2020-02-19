import React from "react";
import { mount } from "enzyme";
import TimelinePage from "./TimelinePage";

describe("<TimelinePage />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<TimelinePage />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
