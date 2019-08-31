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
    case "Skill":
      return <StackPage />;
    default:
      return "";
  }
};

const BasicPage = ({ PageControls }) => {
  return <BasicPageDom>{pageRender(PageControls.currentPage)}</BasicPageDom>;
};

export default BasicPage;
