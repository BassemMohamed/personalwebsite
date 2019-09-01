import React from "react";
import styled from "styled-components";
import { HomePage, QuotePage, StackPage, BlogPage } from "../";

const BasicPageWrapper = styled.div`
  margin: 100px auto 50px auto;
  padding: 0 20px;
  text-align: center;
`;

const pageRender = pageName => {
  switch (pageName) {
    case "Home":
      return <HomePage />;
    case "Quotes":
      return <QuotePage />;
    case "Stack":
      return <StackPage />;
    case "Blog":
      return <BlogPage />;
    default:
      return "";
  }
};

const BasicPage = ({ currentPage }) => {
  return <BasicPageWrapper>{pageRender(currentPage)}</BasicPageWrapper>;
};

export default BasicPage;
