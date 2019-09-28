import React from "react";
import styled from "styled-components";
import { Label } from "../Text";
import Card from "../Card";

const LatestDom = styled.div`
  padding-top: 0.5rem;
  border-top: 1px solid #eee;
  > div {
    margin: 0.5rem 0;
  }
  > div > h2 {
    text-align: left;
    margin-bottom: 0.5rem;
  }

  iframe {
    width: 100% !important;
  }
`;

const Latest = ({ post }) => (
  <LatestDom>
    {post && (
      <div>
        <Label>Latest Post</Label>
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
      </div>
    )}
    <div>
      <Label>Latest Tweet</Label>
      <a
        className="twitter-timeline"
        href="https://twitter.com/BassemMohamed94"
        data-tweet-limit="1"
        data-width="399"
      >
        Loading latest tweet...
      </a>
    </div>
  </LatestDom>
);
export default Latest;
