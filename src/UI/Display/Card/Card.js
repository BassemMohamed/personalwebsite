import React from "react";
import styled from "styled-components";
import css from "./Card.style";

const handleClick = url => {
  window.location = url;
};

const Card = ({ className, name, image, url, desc, date, size }) => (
  <div className={className} onClick={() => handleClick(url)}>
    {size !== "small" && (
      <div className="image" title={name} alt={name} image={image} />
    )}
    <div>
      <h3>{name}</h3>
      {desc && size !== "small" && <p className="desc">{desc}</p>}
      {date && <p className="date">{date}</p>}
    </div>
  </div>
);

export default styled(Card)`
  ${css}
`;
