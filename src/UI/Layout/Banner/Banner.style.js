import { css } from 'styled-components';

export default css`
  width: 100%;
  min-height: 300px;
  position: relative;
  padding-top: ${(props) => props.paddingTop || "5rem"};
  padding-bottom: ${(props) => props.paddingBottom || "5rem"};
  margin-top: ${(props) => props.marginTop || "2rem"};
  margin-bottom: ${(props) => props.marginBottom || "2rem"};
  background: url(${(props) => props.image});
  background-size: cover;

  .overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    position: absolute;
    background-color: ${(props) => props.theme.colors.primary["100"]};
  }

  .content {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);

    p,
    a {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.neutral["100"]};
    }
  }

  @media (min-width: 768px) {
    .content {
      p,
      a {
      }
      font-size: 1.25rem;
    }
  }
  @media (min-width: 1025px) {
    .content {
      p,
      a {
        font-size: 1.5rem;
      }
    }
  }
`;
