import React from "react";
import { mount } from "enzyme";
import TextArea from "./TextArea";

describe("<TextArea />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<TextArea />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
