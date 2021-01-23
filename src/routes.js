import React from 'react';

import { HomePage } from './Pages';

export default [
  {
    name: "Home",
    key: "/",
    description: "Pic & Bio if you are interested in that kinda stuff.",
    component: HomePage,
    exact: true,
    icon: <i className="fas fa-home"></i>
  }
];
