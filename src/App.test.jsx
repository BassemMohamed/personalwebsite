import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = shallow(<App />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
