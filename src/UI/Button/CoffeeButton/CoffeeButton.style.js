import { css } from "styled-components";

export default css`
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  height: 51px;
  line-height: 35px;
  text-decoration: none;
  display: inline-flex;
  color: ${props => props.theme.colors.main};
  background-color: ${props => props.theme.colors.accent};
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 7px 10px 7px 10px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
  font-family: "Aleo Italic";
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -o-transition: 0.3s all linear;
  -webkit-transition: 0.3s all linear;
  -moz-transition: 0.3s all linear;
  -ms-transition: 0.3s all linear;
  transition: 0.3s all linear;

  :hover,
  :active,
  :focus {
    -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
  }

  img {
    width: 35px;
  }
  span {
    display: none;
  }

  @media (min-width: 768px) {
    span {
      display: block;
    }
  }
`;
