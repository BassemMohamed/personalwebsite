import React from "react";
import styled from "styled-components";
import SocialBar from "../../UI/SocialBar";
import { Label } from "../../UI/Text";
import Button from "../../UI/Button";

const HomeWrapper = styled.div`
  margin: 50px auto 50px auto;
  padding: 0 20px;
  max-width: 600px;
  text-align: center;

  p {
    margin: 1em 0;
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

const HomePage = () => (
  <HomeWrapper>
    <AvatarWrapper>
      <img
        src={require("../../../assets/images/bassem.jpeg")}
        alt="Bassem Mohamed"
      />
    </AvatarWrapper>
    <SocialBar TwitterFlag LinkedinFlag GithubFlag DevFlag GoogleFlag CVFFlag />
    <div>
      <Label>Bassem Mohamed</Label>
      <p>
        Hey, Welcome to Bassem Mohamed’s personal space. Bassem is a computer
        science graduate since 2017, super passionate about technology and
        programming, started his career as a <b>full stack</b> web developer in
        a digital marketing agency, where he spent a full year building websites
        for big brands like Nestle, Creative closets and Aramex.
      </p>
      <p>
        Now, He is working as a <b>frontend</b> developer at seal-software, The
        leader in AI-powered contract analytics, discovery & data extraction.
      </p>
      <p>
        Also, Bassem wants to become a <b>writer</b> someday. Right now he is
        honing his skills by writing technical blog posts on dev.to
      </p>
    </div>
    <Button newTab href={"https://dev.to/bassemmohamed"}>
      Blog
    </Button>
  </HomeWrapper>
);

export default HomePage;
