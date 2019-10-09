import React from "react";
import styled from "styled-components";
import { Label } from "../Text";
import Card from "../Card";

const LatestDom = styled.div`
  padding-top: 0.5rem;
  border-top: 1px solid #eee;
  > div {
    margin: 0.5rem auto;
    > div {
      margin: 0 auto;
    }
  }
  > div > h2 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  iframe {
    width: 100% !important;
    max-width: 500px !important;
  }

  @media (min-width: 750px) {
    display: inline-flex;
    > div {
      margin: 0.5rem;
      width: 50%;
    }
    > div > h2 {
      text-align: left;
    }
  }
`;

const Latest = ({ post }) => (
  <LatestDom>
    <div>
      <Label>Latest Tweet</Label>
      <a
        className="twitter-timeline"
        href="https://twitter.com/BassemMohamed94"
        data-tweet-limit="1"
        data-width="500"
      >
        Loading latest tweet...
      </a>
    </div>
    {post && (
      <div>
        <Label>Latest Post</Label>
        <Card
          key={post.key}
          name={post.name}
          image={post.coverImage}
          url={`${window.location.origin}/post/${post.key}`}
          desc={post.description}
          date={post.published}
        />
      </div>
    )}
  </LatestDom>
);
export default Latest;
