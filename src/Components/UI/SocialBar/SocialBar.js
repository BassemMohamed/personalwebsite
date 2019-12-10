import React from "react";
import styled from "styled-components";
import SocialItem from "./SocialItem";

const SocialBarWrapper = styled.div`
  margin: 1em 0 1em 0;
`;

const SocialBar = ({
  FacebookFlag,
  TwitterFlag,
  InstagramFlag,
  LinkedinFlag,
  GithubFlag,
  DevFlag,
  StackOverFlowFlag,
  HackerrankFlag,
  GoogleFlag,
  CVFFlag
}) => (
  <SocialBarWrapper>
    {FacebookFlag && (
      <SocialItem
        title="Facebook"
        href="https://www.facebook.com/Bassem.mohamed1994"
        fontAwesomeClass="fab fa-facebook"
      />
    )}
    {TwitterFlag && (
      <SocialItem
        title="Twitter"
        href="https://twitter.com/BassemMohamed94"
        fontAwesomeClass="fab fa-twitter"
      />
    )}
    {InstagramFlag && (
      <SocialItem
        title="Instagram"
        href="https://www.instagram.com/bassemmohamed94"
        fontAwesomeClass="fab fa-instagram"
      />
    )}
    {LinkedinFlag && (
      <SocialItem
        title="Linkedin"
        href="https://www.linkedin.com/in/bassem-mohamed"
        fontAwesomeClass="fab fa-linkedin"
      />
    )}
    {GithubFlag && (
      <SocialItem
        title="Github"
        href="https://github.com/BassemMohamed"
        fontAwesomeClass="fab fa-github"
      />
    )}
    {DevFlag && (
      <SocialItem
        title="Dev"
        href="https://dev.to/bassemmohamed"
        fontAwesomeClass="fab fa-dev"
      />
    )}
    {StackOverFlowFlag && (
      <SocialItem
        title="StackOverFlow"
        href="https://stackoverflow.com/users/5947152/bassem-mohamed"
        fontAwesomeClass="fab fa-stack-overflow"
      />
    )}
    {HackerrankFlag && (
      <SocialItem
        title="Hackerrank"
        href="https://www.hackerrank.com/bassemmohamed191"
        fontAwesomeClass="fab fa-hackerrank"
      />
    )}
    {GoogleFlag && (
      <SocialItem
        title="Google"
        href="mailto:bassemmohamed1994@gmail.com?Subject=Hello"
        fontAwesomeClass="fab fa-google"
      />
    )}
    {CVFFlag && (
      <SocialItem
        title="Curriculum Vitae"
        href="https://drive.google.com/open?id=1VEGNhIemy3Nn0PUn4B7cPvhaAcvk5cGR"
        fontAwesomeClass="fa fa-file"
      />
    )}
  </SocialBarWrapper>
);

export default SocialBar;
