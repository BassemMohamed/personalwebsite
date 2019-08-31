import React from "react";
import styled from "styled-components";
import { HomePage, QuotePage, StackPage } from "../";

const BasicPageDom = styled.div`
  margin: 100px auto 50px auto;
  padding: 0 20px;
  max-width: 600px;
  text-align: center;
`;

const pageRender = pageName => {
  switch (pageName) {
    case "Home":
      return <HomePage />;
    case "Quote":
      return <QuotePage />;
    case "Stack":
      return <StackPage />;
    default:
      return "";
  }
};

const BasicPage = ({ currentPage }) => {
  return <BasicPageDom>{pageRender(currentPage)}</BasicPageDom>;
};

export default BasicPage;
