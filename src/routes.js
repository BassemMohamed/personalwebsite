import React from 'react';

import { ContactPage, HomePage } from './Pages';

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
    name: "Contact Me",
    key: "/contact",
    component: ContactPage,
    exact: true,
    icon: <i className="fas fa-envelope"></i>
  }
];
