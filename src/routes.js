import { PathToCS } from "./Views/BlogPosts/PathToCS/PathToCS";
import { Main } from "./Main";
import { GraphBlog } from "./Views/BlogPosts/GraphBlog/GraphBlog";
import { DemoList } from "./Views/DemoList";
import { Home } from "./Views/Home";

export const routes = [
  {
    path: "/",
    component: Main,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/blog",
        exact: true,
        component: DemoList,
      },
      {
        path: "/GraphsAndStateMachines",
        exact: true,
        component: GraphBlog,
      },
      { path: "/PathToCS", exact: true, component: PathToCS },
    ],
  },
];
