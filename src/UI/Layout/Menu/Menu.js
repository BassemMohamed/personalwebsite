import React, { useState } from 'react';
import { slide as Slide } from 'react-burger-menu';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Card, Label } from '../../';
import css from './Menu.style';

const Menu = ({ className, routes, post }) => {
  let { pathname } = useLocation();
  let [open, setOpen] = useState(false);

  const onStateChange = state => {
    setOpen(state.isOpen);
  };

  const LatestPost = ({ post }) => (
    <div className="bm-item">
      <Label>Latest Post</Label>
      <Card
        size="small"
        key={post.key}
        name={post.name}
        image={post.coverImage}
        url={`${window.location.origin}/post/${post.key}`}
        desc={post.description}
        date={post.published}
      />
    </div>
  );

  const MenuFooter = () => (
    <p className="bm-item">
      Built with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>{" "}
      by Bassem
    </p>
  );

  return (
    <div className={className}>
      <Slide
        isOpen={open}
        pageWrapId={"page-wrapper"}
        onStateChange={onStateChange}
      >
        {routes &&
          routes.map(route => {
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
        {post && <LatestPost post={post} />}
        <MenuFooter />
      </Slide>
    </div>
  );
};

export default styled(Menu)`
  ${css}
`;
