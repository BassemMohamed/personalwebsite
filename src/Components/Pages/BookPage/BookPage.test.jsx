import React from "react";
import { mount } from "enzyme";
import BookPage from "./BookPage";

describe("<BookPage />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<BookPage />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
