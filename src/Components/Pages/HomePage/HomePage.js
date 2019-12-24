import React from "react";
import styled from "styled-components";
import BlogPosts from "../../../posts";
import { Text, Latest, SocialBar } from "../../UI";

const HomeWrapper = styled.section`
  margin: 0 auto;
  max-width: 600px;
  p {
    margin: 1em 0;
  }
`;

const AvatarWrapper = styled.div`
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
    <>
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
          <Text.Label>Bassem Mohamed</Text.Label>
          <p>
            Hey, Welcome to Bassem Mohamed’s personal space. Bassem is a
            computer science graduate since 2017, super passionate about
            technology and programming, started his career as a full stack web
            developer in a digital marketing agency, where he spent a full year
            building websites for big brands like Nestle, Creative closets and
            Aramex.
          </p>
          <p>
            Now, He is working as a <b>frontend</b> developer at seal-software,
            The leader in AI-powered contract analytics, discovery & data
            extraction.
          </p>
          <p>
            Also, Bassem wants to become a <b>writer</b> someday. Late 2018 He
            started blogging on dev.to, Right now he published <b>10+</b> posts
            that have <b>22,000+</b> total post views.
          </p>
        </div>
      </HomeWrapper>
      <Latest post={latestPost} />
    </>
  );
};

export default HomePage;
