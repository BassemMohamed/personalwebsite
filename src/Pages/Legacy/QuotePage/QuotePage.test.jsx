import React from "react";
import { mount } from "enzyme";
import QuotePage from "./QuotePage";

describe("<QuotePage />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<QuotePage />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
