import React from "react";
import { mount } from "enzyme";
import Book from "./Book";

describe("<Book />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(
      <Book book={{ title: "title", link: "link", image_url: "image_url" }} />
    );
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
