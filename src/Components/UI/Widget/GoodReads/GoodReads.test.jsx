import React from "react";
import { mount } from "enzyme";
import GoodReads from "./GoodReads";

describe("<GoodReads />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<GoodReads />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
