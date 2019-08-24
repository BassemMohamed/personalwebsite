import React from "react";
import styled from "styled-components";
import { Quote } from "../../UI/Text";

const QuotesWrapper = styled.div`
  margin: 50px auto 50px auto;
  padding: 0 20px;
  max-width: 600px;
  text-align: center;
`;

const QuotesPage = () => (
  <QuotesWrapper>
    <Quote author="Theodore N. Vail" align="left">
      Real difficulties can be overcome. It is only the imaginary ones that are
      unconquerable
    </Quote>
    <Quote author="James Clear" align="right">
      Happiness is the space between one desire being fulfilled and a new desire
      forming
    </Quote>
    <Quote author="Friedrich Nietzsche" align="left">
      He who has a why to live for can bear almost any how.
    </Quote>
    <Quote author="Tim Cook" align="right">
      If the service is ‘free’, you are not the customer but the product
    </Quote>
  </QuotesWrapper>
);

export default QuotesPage;
