import { css } from "styled-components";

export default css`
  padding: 2em 1em 1em;
  position: relative;
  border-left: 2px solid #555;

  &::before {
    content: "${({ date }) => date}";
    position: absolute;
    left: 2em;
    font-weight: bold;
    top: 1em;
    display: block;
    color: #555;
    font-family: "Aleo Italic";
    font-weight: 700;
    font-size: 0.785rem;
  }

  &::after {
    width: 10px;
    height: 10px;
    display: block;
    top: 0.9em;
    position: absolute;
    left: -8px;
    border-radius: 10px;
    content: "";
    border: 2px solid #555;
    background: white;
  }
`;
