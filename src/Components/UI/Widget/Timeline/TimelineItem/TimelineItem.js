import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import css from "./TimelineItem.style";

const TimelineItem = ({ className, header, markdownText }) => (
  <div className={className}>
    <h3>{header}</h3>
    {markdownText && <ReactMarkdown source={markdownText} />}
  </div>
);

export default styled(TimelineItem)`
  ${css}
`;
