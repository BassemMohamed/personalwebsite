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
    exact: true
  },
  {
    name: "Blog",
    key: "/blog",
    component: BlogPage,
    exact: true
  },
  {
    name: "Timeline",
    key: "/timeline",
    component: TimelinePage,
    exact: true
  },
  {
    name: "Stack",
    key: "/stack",
    component: StackPage,
    exact: true
  },
  {
    name: "Quotes",
    key: "/quotes",
    component: QuotePage,
    exact: true
  }
];
