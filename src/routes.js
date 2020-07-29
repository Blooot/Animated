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
        path: "/demos",
        exact: true,
        component: DemoList,
      },
      {
        path: "/graphblog-06-2020",
        exact: true,
        component: GraphBlog,
      },
    ],
  },
];
