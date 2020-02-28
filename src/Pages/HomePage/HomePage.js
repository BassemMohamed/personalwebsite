import React from "react";
import styled from "styled-components";
import { Text, Widget } from "../../UI";

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
    border-radius: 20%;
    height: auto;
  }
`;

const HomePage = () => {
  return (
    <>
      <HomeWrapper>
        <AvatarWrapper>
          <img
            src={require("../../assets/images/bassem.jpeg")}
            alt="Bassem Mohamed"
          />
        </AvatarWrapper>
        <Widget.SocialBar
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
            Hey there!! Bassem is a 2017 computer science graduate, super
            passionate about technology and programming. He has been working as
            a software engineer for a couple of years now. He kick started his
            career working as a full-stack web developer in a{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.beyond-creation.net/"
            >
              digital marketing agency
            </a>{" "}
            where he spent a full year building websites for big brands like
            Nestle, Creative closets and Aramex.
          </p>
          <p>
            Choosing <b>frontend</b> as his speciality, He started working as a
            frontend developer at{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.seal-software.com/"
            >
              seal-software
            </a>
            , The leader in AI-powered contract analytics, discovery & data
            extraction.
          </p>
          <p>
            Also, Bassem wants to become a <b>writer</b> someday. Late 2018 He
            started writing technical blog posts on{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://dev.to/bassemmohamed"
            >
              dev.to
            </a>
            , Right now he published <b>12+</b> posts that have <b>26,000+</b>{" "}
            total post views.
          </p>
        </div>
      </HomeWrapper>
    </>
  );
};

export default HomePage;
