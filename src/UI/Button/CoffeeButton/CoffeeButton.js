import React from "react";
import styled from "styled-components";
import css from "./CoffeeButton.style";

const CoffeeButton = ({ className }) => {
  return (
    <a
      target="_blank"
      className={className}
      rel="noopener noreferrer"
      href="https://www.buymeacoffee.com/Dwg1bauX9"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span>Buy me a coffee</span>
    </a>
  );
};

export default styled(CoffeeButton)`
  ${css}
`;
