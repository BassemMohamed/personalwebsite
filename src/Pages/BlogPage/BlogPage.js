import React from "react";
import styled from "styled-components";
import BlogPosts from "../../assets/posts";
import { Card, Text } from "../../UI";

const BlogWrapper = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 20px;
  margin: 0 auto;
  max-width: 1200px;

  @media (min-width: 750px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 1025px) {
    grid-template-columns: auto auto auto;
  }
`;

const BlogPageCopy = () => (
  <Text.Copy title="Bassem's Personal Blog">
    Writing for me is something between a hobby and a goal. I want to publish a
    book someday{" "}
    <span role="img" aria-label="emoji">
      🙏
    </span>
    . For now though, I publish technical blog posts causually here and on{" "}
    <a
      href="https://dev.to/bassemmohamed"
      rel="noopener noreferrer"
      target="_blank"
    >
      dev.to
    </a>
    . Feel free to check them out{" "}
    <span role="img" aria-label="emoji">
      ☺️
    </span>
    .
  </Text.Copy>
);

class BlogPage extends React.Component {
  render() {
    return (
      <>
        <BlogPageCopy />
        <BlogWrapper>
          {BlogPosts.slice(0)
            .reverse()
            .map(post => (
              <Card
                key={post.key}
                name={post.name}
                image={post.coverImage}
                url={`${window.location.origin}/post/${post.key}`}
                desc={post.description}
                date={post.published}
              />
            ))}
        </BlogWrapper>
      </>
    );
  }
}

export default BlogPage;
