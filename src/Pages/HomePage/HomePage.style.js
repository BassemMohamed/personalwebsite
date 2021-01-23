import { css } from 'styled-components';

import { SocialBar } from '../../UI';

export default css`
  ${SocialBar} {
    margin: 1em 0;
  }

  .pic-bio-wrapper {
    height: calc(100vh - 6em);
    max-width: 750px;
    margin: 0 auto;
    padding: 3em 0;
    p {
      margin: 1em 0;
    }
  }

  .avatar-wrapper {
    img {
      width: 100%;
      max-width: 300px;
      border-radius: 20%;
      height: auto;
    }
  }

  .blog-wrapper {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 20px;
    margin: 0 auto 3em auto;
    max-width: 1200px;

    @media (min-width: 750px) {
      grid-template-columns: auto auto;
    }
    @media (min-width: 1025px) {
      grid-template-columns: auto auto auto;
    }
  }
`;
