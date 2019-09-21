import { HomePage, QuotePage, StackPage, BlogPage } from "../Components/Pages";

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
