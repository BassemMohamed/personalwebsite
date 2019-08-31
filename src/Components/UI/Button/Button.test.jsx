import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
    // const div = document.createElement("div");
    // ReactDOM.render(<Button />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });
});
