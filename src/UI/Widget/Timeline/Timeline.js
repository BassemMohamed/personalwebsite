import React from "react";
import styled from "styled-components";
import css from "./Timeline.style";
import TimelineItem from "./TimelineItem";

const Timeline = ({ data, classname }) => (
  <>
    {data && (
      <div className={classname}>
        {data.map(item => (
          <TimelineItem
            key={item.header}
            header={item.header}
            date={item.date}
            markdownText={item.markdownText}
          />
        ))}
      </div>
    )}
  </>
);

export default styled(Timeline)`
  ${css}
`;
