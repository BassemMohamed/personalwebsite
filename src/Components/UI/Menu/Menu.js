import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { slide as Slide } from "react-burger-menu";
import styled from "styled-components";
import MainRoutes from "../../../Routes/MainRoutes";
import BlogPosts from "../../../posts";
import { Text, Card } from "../";
import css from "./Menu.style";

const latestPost = BlogPosts[BlogPosts.length - 1];
const Menu = ({ className }) => {
  let { pathname } = useLocation();
  let [open, setOpen] = useState(false);

  const onStateChange = state => {
    setOpen(state.isOpen);
  };

  return (
    <div className={className}>
      <Slide
        isOpen={open}
        pageWrapId={"page-wrapper"}
        onStateChange={onStateChange}
      >
        {MainRoutes.map(route => {
          let className = "";
          className += pathname === route.key ? "active " : "";
          className += route.disabled ? "disabled " : "";
          return (
            <div key={route.key} className={className}>
              <Link to={route.key} onClick={() => setOpen(false)}>
                {route.icon}
                {route.name}
                {route.description && <span>- {route.description}</span>}
              </Link>
            </div>
          );
        })}
        <div>
          <Text.Label>Latest Post</Text.Label>
          <Card
            size="small"
            key={latestPost.key}
            name={latestPost.name}
            image={latestPost.coverImage}
            url={`${window.location.origin}/post/${latestPost.key}`}
            desc={latestPost.description}
            date={latestPost.published}
          />
        </div>
      </Slide>
    </div>
  );
};

export default styled(Menu)`
  ${css}
`;
