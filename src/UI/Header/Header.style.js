import { css } from "styled-components";

export default css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  text-align: center;
  padding: 5px 0;
  background-color: #f5f5f5;
  box-shadow: 0px 1px 1px 0px #eee;
  border-bottom: 3px solid #eee;

  > div {
    display: inline-flex;
  }

  > div a {
    padding: 0 10px;
    font-size: 1.5em;
    cursor: pointer;
    color: ${({ active }) => (active ? "#e69807" : "#555")};
  }
  > div a.active {
    color: #e69807;
  }
`;
