import React from "react";
import { mount } from "enzyme";
import CoffeeButton from "./CoffeeButton";

describe("<CoffeeButton />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<CoffeeButton />);
  });
  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
