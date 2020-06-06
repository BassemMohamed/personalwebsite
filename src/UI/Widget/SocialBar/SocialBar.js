import React from 'react';
import styled from 'styled-components';

import Icon, { ICON_SIZES } from '../../Display/Icon/Icon';
import css from './SocialBar.style';

export const SOCIALBAR_SIZES = {
  LARGE: "LARGE",
  MEDIUM: "MEDIUM",
  SMALL: "SMALL",
};

export const SOCIALBAR_ICON_STYLES = {
  NORMAL: "NORMAL",
  SQUARE: "SQUARE",
};

export const SOCIALBAR_ICON = {
  facebook: {
    NORMAL: "fab fa-facebook-f",
    SQUARE: "fab fa-facebook-square",
  },
  twitter: {
    NORMAL: "fab fa-twitter",
    SQUARE: "fab fa-twitter-square",
  },
  instagram: {
    NORMAL: "fab fa-instagram",
    SQUARE: "fab fa-instagram-square",
  },
  linkedin: {
    NORMAL: "fab fa-linkedin-in",
    SQUARE: "fab fa-linkedin",
  },
  github: {
    NORMAL: "fab fa-github",
    SQUARE: "fab fa-github-square",
  },
  dev: {
    NORMAL: "fab fa-dev",
    SQUARE: "fab fa-dev",
  },
  stackoverflow: {
    NORMAL: "fab fa-stack-overflow",
    SQUARE: "fab fa-stack-overflow",
  },
  hackerrank: {
    NORMAL: "fab fa-hackerrank",
    SQUARE: "fab fa-hackerrank",
  },
  goodreads: {
    NORMAL: "fab fa-goodreads-g",
    SQUARE: "fab fa-goodreads",
  },
  email: {
    NORMAL: "fas fa-envelope",
    SQUARE: "fas fa-envelope-square",
  },
  resume: {
    NORMAL: "fa fa-file-pdf",
    SQUARE: "fa fa-file-pdf",
  },
};

/*
  SocialBar

  Props:
    * data
    * size
    * color
    * iconStyle
*/
const SocialBar = (props) => {
  const { className, data, size, color, iconstyle } = props;

  if (data && data.length > 0)
    return (
      <div className={className} {...props}>
        {data.map((item, i) => (
          <Icon
            key={i}
            color={color}
            title={item.title}
            size={ICON_SIZES[size]}
            fontawesomeclass={
              item.fontAwesomeClass ||
              SOCIALBAR_ICON[item.title][
              iconstyle || SOCIALBAR_ICON_STYLES.NORMAL
              ]
            }
            onClick={() => window.open(item.url, "_blank")}
          />
        ))}
      </div>
    );

  return null;
};

export default styled(SocialBar)`
  ${css}
`;
