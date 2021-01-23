import React from 'react';
import styled from 'styled-components';

import BlogPosts from '../../assets/posts';
import { Banner, Card, Copy, Label, SocialBar } from '../../UI';
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
            src={require("../../assets/images/bassem.jpg")}
            alt="Bassem Ibrahim"
          />
        </div>
        <SocialBar
          size={SOCIALBAR_SIZES.LARGE}
          iconstyle={SOCIALBAR_ICON_STYLES.SQUARE}
          data={SOCIAL_BAR_DATA}
        />
        <div>
          <p>
            Hey, I am <b>Bassem Ibrahim</b>, I am a frontend developer with <b>4+</b> years of experience, I am super passionate building clean & simple UI. Mid-2020, I managed to relocate to Germany during the panademic. You can read about the whole story
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://getbyrd.com/en/blog/relocating-to-germany-during-the-pandemic/"
            > here.</a>
          </p>
          <p>
            On the weekends, you can either find me hiking, maybe cycling, or just a lazy couchpotato daydreaming about van life. Also, I want to become a writer someday. Late 2018 I started writing technical blog posts on
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://dev.to/bassemmohamed"
            > dev.to</a>
            , Right now I published <b>12+</b> posts that have <b>26,000+</b> total post views.
          </p>
        </div>
      </div>

      <Banner
        marginTop="0"
        marginBottom="5em"
        image={require("../../assets/images/blog-copy-background.png")}
      >
        <Label>Bassem's Blog</Label>
        <Copy>
          Writing for me is something between a hobby and a goal. I publish technical blog posts causually on dev.to. Feel free to check them out.
        </Copy>
      </Banner>

      <div className="blog-wrapper">
        {BlogPosts.slice(0)
          .reverse()
          .map(post => (
            <Card
              key={post.key}
              name={post.name}
              image={post.coverImage}
              url={post.devUrl}
              desc={post.description}
              date={post.published}
            />
          ))}
      </div>
    </section>
  );
};

export default styled(HomePage)`
  ${css}
`;

