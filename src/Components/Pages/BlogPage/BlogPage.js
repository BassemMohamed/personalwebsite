import React from "react";
import styled from "styled-components";
import BlogPosts from "../../../Posts/";
import Card from "../../UI/Card";
import Header from "../../UI/Header";

const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 20px;
  margin: 0 auto;
  max-width: 1200px;

  @media (min-width: 750px) {
    grid-template-columns: auto auto;
  }
`;

const BlogPage = () => (
  <>
    <Header />
    <BlogWrapper>
      {BlogPosts.map((post, i) => (
        <Card
          key={post.key}
          name={post.name}
          image={post.coverImage}
          url={`${window.location.origin}/post/${post.key}`}
          desc={
            post.description.length > 50
              ? `${post.description.substring(0, 50)}...`
              : post.description
          }
          date={post.published}
        />
      ))}
    </BlogWrapper>
  </>
);

export default BlogPage;
