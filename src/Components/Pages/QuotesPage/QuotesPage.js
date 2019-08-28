import React from "react";
import styled from "styled-components";
import { Quote } from "../../UI/Text";

const QuotesWrapper = styled.div``;

const QuotesPage = () => (
  <QuotesWrapper>
    <Quote author="Aristotle" align="left">
      We are what we repeatedly do. Excellence then is not an act but a habit
    </Quote>
    <Quote author="Theodore N. Vail" align="right">
      Real difficulties can be overcome. It is only the imaginary ones that are
      unconquerable
    </Quote>
    <Quote author="James Clear" align="left">
      Happiness is the space between one desire being fulfilled and a new desire
      forming
    </Quote>
    <Quote author="Friedrich Nietzsche" align="right">
      He who has a why to live for can bear almost any how.
    </Quote>
    <Quote author="Tim Cook" align="left">
      If the service is ‘free’, you are not the customer but the product
    </Quote>
  </QuotesWrapper>
);

export default QuotesPage;
