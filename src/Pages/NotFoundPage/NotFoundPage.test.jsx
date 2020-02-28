import React from "react";
import { mount } from "enzyme";
import NotFoundPage from "./NotFoundPage";

describe("<NotFoundPage />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<NotFoundPage />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
