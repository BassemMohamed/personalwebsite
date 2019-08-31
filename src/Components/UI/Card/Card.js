import React from "react";
import styled from "styled-components";

const CardDom = styled.div`
  color: #555;
  width: 100%;
  height: 200px;
  cursor: pointer;
  display: inline-flex;
  border: 1px solid #dedede;

  img,
  div {
    width: 50%;
    height: auto;
  }
  div {
    padding: 20px;
  }
`;

const handleClick = url => {
  window.location = url;
};

const Card = ({ name, image, url, desc, date }) => (
  <CardDom onClick={() => handleClick(url)}>
    <img title={name} alt={name} src={image} />
    <div>
      <h3>{name}</h3>
      {desc && <p>{desc}</p>}
      {date && <p>{date}</p>}
    </div>
  </CardDom>
);

export default Card;
