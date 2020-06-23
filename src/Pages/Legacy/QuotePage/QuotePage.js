import React from 'react';
import styled from 'styled-components';

import { Quote } from '../../UI';

const QuoteWrapper = styled.section`
  margin: 0 auto;
  max-width: 600px;
`;

const QuotePage = () => (
  <QuoteWrapper>
    <Quote
      author="Aristotle"
      authorPage="https://en.wikipedia.org/wiki/Aristotle"
      align="left"
    >
      We are what we repeatedly do. Excellence then is not an act but a habit
    </Quote>
    <Quote
      author="Theodore N. Vail"
      authorPage="https://en.wikipedia.org/wiki/Theodore_Newton_Vail"
      align="right"
    >
      Real difficulties can be overcome. It is only the imaginary ones that are
      unconquerable
    </Quote>
    <Quote
      author="James Clear"
      authorPage="https://twitter.com/JamesClear"
      align="left"
    >
      Happiness is the space between one desire being fulfilled and a new desire
      forming
    </Quote>
    <Quote
      author="Friedrich Nietzsche"
      authorPage="https://en.wikipedia.org/wiki/Friedrich_Nietzsche"
      align="right"
    >
      He who has a why to live for can bear almost any how.
    </Quote>
    <Quote
      author="James M. Barrie"
      authorPage="https://en.wikipedia.org/wiki/J._M._Barrie"
      align="left"
    >
      The life of every man is a diary in which he means to write one story, and
      writes another; and his humblest hour is when he compares the volume as it
      is with what he vowed to make it. -
    </Quote>
    <Quote
      author="Tim Cook"
      authorPage="https://en.wikipedia.org/wiki/Tim_Cook"
      align="right"
    >
      If the service is ‘free’, you are not the customer but the product
    </Quote>
  </QuoteWrapper>
);

export default QuotePage;
