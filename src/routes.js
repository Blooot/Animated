import { Main } from "./Main";
import { Home } from "./Views/Home";
import { DemoList } from "./Views/DemoList";
import { GraphBlog } from "./Views/GraphBlog";

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
