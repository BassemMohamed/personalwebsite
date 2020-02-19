import React from "react";
import { mount } from "enzyme";
import Icon from "./Icon";

describe("<Icon />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<Icon name="IconName" imageLink="IconImage" />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });

  it("renders name on prop", () => {
    expect(Wrapper.find("p")).toHaveLength(1);
  });

  it("renders image on prop", () => {
    expect(Wrapper.find("img")).toHaveLength(1);
  });
});
