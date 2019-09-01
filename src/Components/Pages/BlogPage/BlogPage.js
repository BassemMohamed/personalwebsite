import React from "react";
import styled from "styled-components";
import BlogPosts from "../../../posts";
import Card from "../../UI/Card";

const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 20px;
`;

const BlogPage = () => (
  <BlogWrapper>
    {BlogPosts.map((post, i) => (
      <Card
        key={i}
        name={post.name}
        image={post.coverImage}
        url={post.devUrl}
        desc={post.description}
        date={post.published}
      />
    ))}
  </BlogWrapper>
);

export default BlogPage;
