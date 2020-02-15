import React from "react";
import { mount } from "enzyme";

import Button from "./Button";

describe("<Button />", () => {
  let Wrapper;
  const className = "className";
  const children = "children";
  const handleClick = jest.fn();

  beforeEach(() => {
    Wrapper = mount(
      <Button onClick={handleClick} className={className}>
        {children}
      </Button>
    );
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });

  it("onClick prop", () => {
    Wrapper.simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });

  it("children prop", () => {
    expect(Wrapper.text()).toEqual(children);
  });
});
