import { css } from 'styled-components';

import { Banner, Button, SocialBar } from '../../UI';

export default css`
  ${SocialBar} {
    margin: 1em 0;
  }

  ${Banner} {
    ${Button} {
      margin-top: 1em;
    }
  }

  .pic-bio-wrapper {
    margin: 0 auto;
    max-width: 600px;
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
`;
