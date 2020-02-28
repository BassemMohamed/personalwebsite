import React from "react";
import {
  HomePage,
  QuotePage,
  StackPage,
  TimelinePage,
  BookPage,
  BlogPage,
  ContactPage
} from "./Pages";

export default [
  {
    name: "Home",
    key: "/",
    description: "Pic & Bio if you are interested in that kinda stuff.",
    component: HomePage,
    exact: true,
    icon: <i className="fas fa-home"></i>
  },
  {
    name: "Blog",
    key: "/blog",
    description: "I write some stuff you know.",
    component: BlogPage,
    exact: true,
    icon: <i className="far fa-file-alt"></i>
  },
  {
    name: "Timeline",
    key: "/timeline",
    description: `${new Date().getFullYear() - 1994} years & Still counting.`,
    component: TimelinePage,
    exact: true,
    icon: <i className="fas fa-hourglass-start"></i>
  },
  {
    name: "Tech Stack",
    key: "/stack",
    component: StackPage,
    exact: true,
    icon: <i className="fas fa-layer-group"></i>
  },
  {
    name: "Fav Quotes",
    key: "/quotes",
    component: QuotePage,
    exact: true,
    icon: <i className="fas fa-quote-left"></i>
  },
  {
    name: "Books",
    key: "/books",
    component: BookPage,
    exact: true,
    icon: <i className="fas fa-book"></i>
  },
  {
    name: "Hike The World!",
    key: "/hiketheworld",
    disabled: true,
    description: "Coming soon!",
    exact: true,
    icon: <i className="fas fa-hiking"></i>
  },
  {
    name: "Contact Me",
    key: "/contact",
    component: ContactPage,
    exact: true,
    icon: <i className="fas fa-envelope"></i>
  }
];
