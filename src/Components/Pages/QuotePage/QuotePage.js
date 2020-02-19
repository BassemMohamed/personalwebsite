import React from "react";
import styled from "styled-components";
import { Text } from "../../UI";

const QuoteWrapper = styled.section`
  margin: 0 auto;
  max-width: 600px;
`;

const QuotePage = () => (
  <QuoteWrapper>
    <Text.Quote
      author="Aristotle"
      authorPage="https://en.wikipedia.org/wiki/Aristotle"
      align="left"
    >
      We are what we repeatedly do. Excellence then is not an act but a habit
    </Text.Quote>
    <Text.Quote
      author="Theodore N. Vail"
      authorPage="https://en.wikipedia.org/wiki/Theodore_Newton_Vail"
      align="right"
    >
      Real difficulties can be overcome. It is only the imaginary ones that are
      unconquerable
    </Text.Quote>
    <Text.Quote
      author="James Clear"
      authorPage="https://twitter.com/JamesClear"
      align="left"
    >
      Happiness is the space between one desire being fulfilled and a new desire
      forming
    </Text.Quote>
    <Text.Quote
      author="Friedrich Nietzsche"
      authorPage="https://en.wikipedia.org/wiki/Friedrich_Nietzsche"
      align="right"
    >
      He who has a why to live for can bear almost any how.
    </Text.Quote>
    <Text.Quote
      author="Tim Cook"
      authorPage="https://en.wikipedia.org/wiki/Tim_Cook"
      align="left"
    >
      If the service is ‘free’, you are not the customer but the product
    </Text.Quote>
  </QuoteWrapper>
);

export default QuotePage;
