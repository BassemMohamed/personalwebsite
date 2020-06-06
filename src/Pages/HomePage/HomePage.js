import React from 'react';
import styled from 'styled-components';

import { Banner, Button, Copy, Label, SocialBar } from '../../UI';
import {
  SOCIALBAR_ICON_STYLES,
  SOCIALBAR_SIZES,
} from '../../UI/Widget/SocialBar/SocialBar';
import css from './HomePage.style';

const SOCIAL_BAR_DATA = [
  {
    title: "twitter",
    url: "https://twitter.com/BassemMohamed94",
  },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/in/bassem-mohamed/",
  },
  {
    title: "github",
    url: "https://github.com/BassemMohamed",
  },
  {
    title: "dev",
    url: "https://dev.to/bassemmohamed",
  },
  {
    title: "goodreads",
    url: "https://www.goodreads.com/user/show/90168658-bassem-mohamed",
  },
  {
    title: "email",
    url: "mailto:bassemmohamed1994@gmail.com?Subject=Hello",
  },
  {
    title: "resume",
    url: "https://drive.google.com/open?id=1VEGNhIemy3Nn0PUn4B7cPvhaAcvk5cGR",
  },
];

const HomePage = ({ className }) => {
  return (
    <section className={className}>
      <div className="pic-bio-wrapper">
        <div className="avatar-wrapper">
          <img
            src={require("../../assets/images/bassem.jpeg")}
            alt="Bassem Mohamed"
          />
        </div>
        <SocialBar
          size={SOCIALBAR_SIZES.LARGE}
          iconstyle={SOCIALBAR_ICON_STYLES.SQUARE}
          data={SOCIAL_BAR_DATA}
        />
        <div>
          <Label>Bassem Mohamed</Label>
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
      </div>
      <Banner
        marginTop="0"
        marginBottom="0"
        image={require("../../assets/images/blog-copy-background.png")}
      >
        <Copy>
          Writing for me is something between a hobby and a goal. I want to publish a book someday. For now though, I publish technical blog posts causually on dev.to. Feel free to check them out.
          <Button>Blog</Button>
        </Copy>
      </Banner>
    </section>
  );
};

export default styled(HomePage)`
  ${css}
`;

