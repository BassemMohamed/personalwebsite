import React from "react";
import styled from "styled-components";

const CardDom = styled.div`
  color: #555;
  width: 100%;
  height: 200px;
  cursor: pointer;
  display: inline-flex;
  border: 1px solid #dedede;
  background-color: #fafafa;

  img,
  div {
    width: 50%;
    height: auto;
  }
  div {
    padding: 20px;

    .desc {
      margin: 10px 0;
    }
    .date {
      font-family: "Aleo Italic";
    }
  }

  :hover {
    background-color: #f5f5f5;
    div {
      background-size: 100% 100%;
    }
  }
`;

const CardImage = styled.div`
  background-image: url(${({ image }) => image});
  background-size: 110% 110%;
  background-position: center;
  transition: background 0.8s;
`;

const handleClick = url => {
  window.location = url;
};

const Card = ({ name, image, url, desc, date }) => (
  <CardDom onClick={() => handleClick(url)}>
    <CardImage title={name} alt={name} image={image} />
    <div>
      <h3>{name}</h3>
      {desc && <p className="desc">{desc}</p>}
      {date && <p className="date">{date}</p>}
    </div>
  </CardDom>
);

export default Card;
