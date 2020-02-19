import React from "react";
import { mount } from "enzyme";
import PostPage from "./PostPage";
import BlogPosts from "../../../posts/";

describe("<PostPage />", () => {
  let Wrapper;
  beforeAll(() => {
    const match = { params: { postId: BlogPosts[0].key } };
    Wrapper = mount(<PostPage match={match} />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
