import React from "react";
import styled from "styled-components";
import SocialBar from "../../UI/SocialBar";
import { Label } from "../../UI/Text";
import BlogPosts from "../../../posts";
import Card from "../../UI/Card";

const HomeWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  p {
    margin: 1em 0;
  }

  .latest_post {
    padding-top: 0.5rem;
    border-top: 1px solid #eee;
  }
  .latest_post > h2 {
    text-align: left;
    margin-bottom: 0.25rem;
  }
`;

const AvatarWrapper = styled.div`
  margin-top: 50px;
  img {
    width: 100%;
    max-width: 300px;
    height: 400px;
    border-radius: 20%;
  }
`;

const HomePage = () => {
  const latestPost = BlogPosts[BlogPosts.length - 1];
  return (
    <HomeWrapper>
      <AvatarWrapper>
        <img
          src={require("../../../assets/images/bassem.jpeg")}
          alt="Bassem Mohamed"
        />
      </AvatarWrapper>
      <SocialBar
        TwitterFlag
        LinkedinFlag
        GithubFlag
        DevFlag
        GoogleFlag
        CVFFlag
      />
      <div>
        <Label>Bassem Mohamed</Label>
        <p>
          Hey, Welcome to Bassem Mohamed’s personal space. Bassem is a computer
          science graduate since 2017, super passionate about technology and
          programming, started his career as a <b>full stack</b> web developer
          in a digital marketing agency, where he spent a full year building
          websites for big brands like Nestle, Creative closets and Aramex.
        </p>
        <p>
          Now, He is working as a <b>frontend</b> developer at seal-software,
          The leader in AI-powered contract analytics, discovery & data
          extraction.
        </p>
        <p>
          Also, Bassem wants to become a <b>writer</b> someday. Right now he is
          honing his skills by writing technical blog posts on dev.to
        </p>
      </div>

      {/* TODO: Better latest section with latest tweet also */}
      <div className="latest_post">
        <Label>Latest Post</Label>
        <Card
          key={latestPost.key}
          name={latestPost.name}
          image={latestPost.coverImage}
          url={`${window.location.origin}/post/${latestPost.key}`}
          desc={
            latestPost.description.length > 50
              ? `${latestPost.description.substring(0, 50)}...`
              : latestPost.description
          }
          date={latestPost.published}
        />
      </div>
    </HomeWrapper>
  );
};

export default HomePage;
