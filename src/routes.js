import { Main } from "./Main";
import { Home } from "./Views/Home";
import { DemoList } from "./Views/DemoList";

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
    ],
  },
];
