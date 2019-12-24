import React from "react";
import {
  HomePage,
  QuotePage,
  StackPage,
  TimelinePage,
  BlogPage
} from "../Components/Pages";

export default [
  {
    name: "Home",
    key: "/",
    component: HomePage,
    exact: true,
    icon: <i className="fas fa-home"></i>
  },
  {
    name: "Blog",
    key: "/blog",
    component: BlogPage,
    exact: true,
    icon: <i className="far fa-file-alt"></i>
  },
  {
    name: "Timeline",
    key: "/timeline",
    component: TimelinePage,
    exact: true,
    icon: <i className="fas fa-hourglass-start"></i>
  },
  {
    name: "Stack",
    key: "/stack",
    component: StackPage,
    exact: true,
    icon: <i className="fas fa-layer-group"></i>
  },
  {
    name: "Quotes",
    key: "/quotes",
    component: QuotePage,
    exact: true,
    icon: <i className="fas fa-quote-left"></i>
  }
];
