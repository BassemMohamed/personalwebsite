import React from "react";
import styled from "styled-components";

const CardDom = styled.div`
  color: #555;
  width: 100%;
  max-width: 500px;
  position: relative;
  cursor: pointer;
  text-align: left;
  border: 1px solid #dedede;
  background-color: #fafafa;

  div {
    padding: 20px;
    padding-bottom: 45px;

    .desc {
      margin: 10px 0;
    }
    .date {
      font-family: "Aleo Italic";
      margin: 0;
      position: absolute;
      left: 20px;
      bottom: 20px;
    }
  }

  :hover {
    background-color: #f5f5f5;
  }
`;

const CardImage = styled.div`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: top left;
  transition: background 0.8s;
  height: 150px;
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
